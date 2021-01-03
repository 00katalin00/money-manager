import CustomException from '../Exception/CustomException';
import User from '../Modules/User';
import md5 from 'md5';
import Database from '../Domain/Database';
import AccountDomain from '../Domain/AccountDomain';
import UserDomain from '../Domain/UserDomain';
import { Client } from 'pg';
import Config from '../Settings';
import Account from '../Modules/Account';

export default class AccountServices {

    public async createNewAccount(acc: Account): Promise<void> {

        const _Database = new Database();
        const _AccountDomain = new AccountDomain();
        const _UserDomain = new UserDomain();


        let conn: null | Client = null;

        try {
            conn = await _Database.connect();

            let _user = new User();
            _user.setUID(acc.getUID());

            //let response: User | null = await _UserDomain.getUserByUID(_user, conn);

            if (!await _UserDomain.getUserByUID(_user, conn)) {
                throw new CustomException(-2200); //EL USUARIO NO EXISTE
            }

            acc.setAID("_aid_" + md5(acc.getUID() + new Date().getTime() + Math.random()))

            let created = await _AccountDomain.createNewAccount(acc, conn);

            if (created != 1) {
                throw new CustomException(-3001); // NO SE HA CREADO 
            }

        } catch (e) {
            throw e;
        } finally {
            _Database.disconnect(conn);
        }

    }
    public async modifyAccount(){}
    public async deleteAccount(user: User, acc: Account): Promise<void> {

    }

}