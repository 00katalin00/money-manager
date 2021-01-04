import CustomException from '../Exception/CustomException';
import User from '../Modules/User';
import Account from '../Modules/Account';
import { Client, QueryConfig } from 'pg';
import Config from '../Settings';

export default class AccountDomain {

    public async getUserAccounts(usr: User, conn: Client): Promise<Account[]> {

        const query: QueryConfig = {
            name: 'get-all-accounts',
            text: `SELECT * FROM "${Config.PG_SCHEMA}"."account" WHERE uid = $1`,
            values: [usr.getUID()]
        }

        let result: Account[] = [];
        let _Account: Account | null = null;

        try {

            let response = await conn.query(query);

            if (response.rows.length > 0) {
                for (let i = 0; i < response.rows.length; i++) {

                    _Account = new Account();
                    _Account.setName(response.rows[i].name);
                    _Account.setAID(response.rows[i].aid);
                    _Account.setUID(response.rows[i].uid);

                    result.push(_Account);
                }
            }

        } catch (e) {
            throw new CustomException(-3020);
        } finally {
            return result;
        }

    }

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
        } finally {
            return success;
        }

    }
    public async deleteAccount() {

    }

}