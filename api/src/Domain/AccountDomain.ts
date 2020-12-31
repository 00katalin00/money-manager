import CustomException from '../Exception/CustomException';
import User from '../Modules/User';
import Account from '../Modules/Account';
import { Client, QueryConfig } from 'pg';
import Config from '../Settings';

export default class AccountDomain {

    public async createNewAccount(acc: Account, conn: Client): Promise<number> {

        const query: QueryConfig = {
            name: 'add-new-account',
            text: `INSERT INTO "${Config.PG_SCHEMA}"."account" (aid, name, uid) VALUES ($1, $2, $3)`,
            values: [acc.getAID(), acc.getName(), acc.getUID()]
        }

        let success: number = 0;

        try {
            
            let response = await conn.query(query);
            success = response.rowCount;

            console.log("ACCOUNT REG", success);

        } catch (e) {
            throw new CustomException(-3000);
        }finally{
            return success;
        }

    }
    public async deleteAccount() {

    }

}