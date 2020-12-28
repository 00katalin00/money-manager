import { RequestHandler, Request, Response } from 'express';
import md5 from 'md5';
import IStatus from '../Interfaces/IStatus';
import IAccount from '../Interfaces/IAccount';
import Account from '../Modules/Account';

export default class AccountsController {


    public registerAccount: RequestHandler = async (req: Request, res: Response): Promise<Response> => {


        let status: IStatus = {
            code: 400, // Bad Request. El servidor no puede o no va a procesar el request por un error de sintaxis del cliente.
            error: -4001
        }

        const data: IAccount = req.body;

        if (data.name && data.email && data.password) {

            let _Account = new Account(
                "_" + md5(data.email),
                data.name,
                data.email,
                data.password
            );

            try {


                status = {
                    code: 201, // 201 Created. El request se ha completado y se ha creado un nuevo recurso.
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



/// https://youtu.be/2jqok-WgelI?t=4181


//https://diego.com.es/codigos-de-estado-http