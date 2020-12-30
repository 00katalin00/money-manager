import CustomException from '../Exception/CustomException';
import User from '../Modules/User';
import md5 from 'md5';
import Database from '../Domain/Database';
import UserDomain from '../Domain/UserDomain';
import { Client } from 'pg';
import Config from '../Settings';

export default class UserServices {

    public async registerUser(user: User): Promise<void> {

        const _Database = new Database();
        const _UserDomain = new UserDomain();

        let conn: null | Client = null;

        try {

            conn = await _Database.connect();

        } catch (e) {
            throw e;
        } finally {
            _Database.disconnect(conn);
        }
    }





    // uid ->  _uid_"md5(email)""
}