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


        user.setUID("_uid_" + md5(user.getEmail()));

        try {

            conn = await _Database.connect();

            if (await _UserDomain.getUserByUID(user, conn) != null) {
                throw new CustomException(-2100); //EL USUARIO YA EXISTE
            }

            let response = await _UserDomain.registerUser(user, conn);

            if(response != 1){
                throw new CustomException(-2001); // NO SE HA CREADO EL USUARIO
            }

        } catch (e) {
            throw e;
        } finally {
            _Database.disconnect(conn);
        }
    }





    // uid ->  _uid_"md5(email)""
}