import pg from 'pg';
import { LoggerService } from '../services/logger.service.js';

export class PostgreService {
    constructor() {
        this.pgClient = null;
        this.loggerService = new LoggerService();
    }

    async connect() {
        if (!this.pgClient) {
            this.pgClient = new pg.Client({ connectionString: process.env.DATABASE_URL });
            await this.pgClient.connect();
        }
    }

    async disconnect() {
        if (this.pgClient) {
            await this.pgClient.end();
            this.pgClient = null;
        }
    }

    async query(query, params = []) {
        let retryCount = 0;
        const maxRetries = 3;

        while (retryCount <= maxRetries) {
            try {
                await this.connect();
                const res = await this.pgClient.query(query, params);
                return res.rows;
            } catch (err) {
                retryCount++;
                this.loggerService.error('Error executing query:', query, err);
                if (retryCount <= maxRetries) {
                    this.loggerService.log(`Retrying query, attempt ${retryCount} of ${maxRetries}`);
                }
            } finally {
                await this.disconnect();
            }
        }

        throw new Error('Query failed after retrying.');
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
