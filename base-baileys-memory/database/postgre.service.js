import pg from 'pg';
import { LoggerService } from '../services/logger.service.js';

export class PostgreService {
    constructor() {
        this.pgClient = new pg.Pool({
            connectionString: process.env.DATABASE_URL,
            max: 3, // Allow a maximum of 3 connections
            idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
            connectionTimeoutMillis: 2000, // Wait up to 2 seconds for a free connection
        });
        this.loggerService = new LoggerService();
    }



    async query(query, params = []) {
        let retryCount = 0;
        const maxRetries = 3;

        while (retryCount <= maxRetries) {
            try {
                const client = await this.pgClient.connect(); // Get a connection from the pool
                try {
                    const res = await client.query(query, params);
                    return res.rows;
                } finally {
                    client.release(); // Release the connection back to the pool
                }
            } catch (err) {
                retryCount++;
                this.loggerService.error('Error executing query:', query, err);
                if (retryCount <= maxRetries) {
                    this.loggerService.log(`Retrying query, attempt ${retryCount} of ${maxRetries}`);
                } else {
                    throw new Error('Query failed after retrying.');
                }
            }
        }
    }

    async addPhone(phone) {
        const query = `INSERT INTO completed_flow (phone)
                       VALUES ($1)
                       ON CONFLICT (phone) DO NOTHING`;
        return this.query(query, [phone]);
    }

    async getPhones() {
        const query = 'SELECT phone FROM completed_flow';
        const rows = await this.query(query);
        return rows.map(row => row.phone);
    }

    async getBotStatus() {
        const query = 'SELECT is_on FROM app_status LIMIT 1';
        const result = await this.query(query);
        return result.length > 0 ? result[0].is_on : false;
    }

    async setBotStatus(status) {
        const query = `UPDATE app_status
                   SET is_on = $1
                   WHERE id = 1`;
        return this.query(query, [status]);
    }
}
