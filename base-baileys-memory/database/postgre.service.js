import pg from 'pg';
import {LoggerService} from "../services/logger.service.js";

export class PostgreService {
    constructor() {
        this.pgClient = new pg.Client({ connectionString: process.env.DATABASE_URL });
        this.pgClient.connect();
        this.loggerService = new LoggerService()
    }

    async destroy() {
        if (this.pgClient) {
            await this.pgClient.end();
        }
    }

    async addPhone(phone) {
        const query = `INSERT INTO completed_flow (phone)
        VALUES ('${phone}')
        ON CONFLICT (phone) DO NOTHING`;

        return new Promise((resolve, reject) => {
            this.pgClient.query(query, (err, res) => {
                if (err) {
                    this.loggerService.error('Error Adding New Phone - Phone: ', phone, err)
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    async getPhones() {
        const query = 'SELECT completed_flow.phone FROM completed_flow';
        try {
            const res = await this.pgClient.query(query);
            return res.rows.map(row => row.phone);
        } catch (err) {
            throw err;
        }
    }

}

