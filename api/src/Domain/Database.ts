import { Client, ClientConfig } from 'pg';
import CustomException from '../Exception/CustomException';
import Config from "../Settings";

export default class Database {

    private options: ClientConfig;

    constructor() {
        this.options = {
            user: Config.PG_USER,
            password: Config.PG_PASSWORD,
            database: Config.PG_DB,
            host: Config.PG_HOST,
            port: parseInt(Config.PG_PORT) || 5432
        }
    }


    public async connect(): Promise<Client> {
        const client = new Client(this.options);
        try {
            await client.connect();
        } catch (e) {
            throw new CustomException(-1000);
        }
        return client;
    }
    public async disconnect(conn: Client | null): Promise<void> {
        try {
            if (conn != null) {
                await conn.end();
            }
        } catch (e) {
            throw new CustomException(-1001);
        }
    }

}

// https://www.youtube.com/watch?v=ap4C4384Cu8
// https://node-postgres.com/features/queries