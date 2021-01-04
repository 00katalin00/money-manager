import CustomException from '../Exception/CustomException';
import User from '../Modules/User';
import Account from '../Modules/Account';
import { Client, QueryConfig } from 'pg';
import Config from '../Settings';

export default class UserDomain {

    public async registerUser(user: User, conn: Client): Promise<number> {

        const query: QueryConfig = {
            name: 'add-new-user',
            text: `INSERT INTO "${Config.PG_SCHEMA}"."user" (uid, name, email, password) VALUES ($1, $2, $3, $4)`,
            values: [user.getUID(), user.getName(), user.getEmail(), user.getPassword()]
        } 

        let success: number = 0;

        try {

            let response = await conn.query(query);
            success = response.rowCount;

            console.log(success);

        } catch (e) {
            throw new CustomException(-2000);
        } finally {
            return success;
        }
    }

    public async getUserByUID(user: User, conn: Client): Promise<User | null> {

        const query: QueryConfig = {
            name: 'get-user-by-uid',
            text: `SELECT * FROM "${Config.PG_SCHEMA}"."user" WHERE uid = $1`,
            values: [user.getUID()]
        }

        let _User: User | null = null;

        try { 

            let response = await conn.query(query);
            
            if (response.rows.length == 1) {
                _User = new User();

                _User.setUID(response.rows[0].uid);
                _User.setEmail(response.rows[0].email);
                _User.setName(response.rows[0].name);
                _User.setPassword(response.rows[0].password);

            }

        } catch (e) {
            throw new CustomException(-2001);
        } finally {
            return _User;
        }

    }

}