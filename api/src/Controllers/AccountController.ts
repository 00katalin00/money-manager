import { RequestHandler, Request, Response } from 'express';
import IStatus from '../Interfaces/IStatus';
import IUser from '../Interfaces/IUser';
import User from '../Modules/User';
import UserServices from '../Services/UserServices';
import AccountServices from '../Services/AccountServices';
import Account from '../Modules/Account';
export default class AccountController {
    public createNewAccount: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
        let status: IStatus = {
            code: 200,
            error: 0
        }

        const accountName = req.body.accountName;
        const uid = req.header('uid')

        if (accountName && uid) {

            try {

                let acc = new Account();
                acc.setName(accountName);
                acc.setUID(uid);

                new AccountServices().createNewAccount(acc);

                status = {
                    code: 201,
                    error: 0
                }
            } catch (e) {
                status = {
                    code: 200, // 200 OK. El request es correcto. Esta es la respuesta estándar para respuestas correctas.
                    error: e.error
                }
            }

        }


        return res.status(status.code).json({ "status": status.error });
    }

}