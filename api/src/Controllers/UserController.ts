import { RequestHandler, Request, Response } from 'express';
import IStatus from '../Interfaces/IStatus';
import IUser from '../Interfaces/IUser';
import User from '../Modules/User';
import UserServices from '../Services/UserServices';
export default class UserController {


    public getUserData: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
        
        let status: IStatus = {
            code: 200, // Bad Request. El servidor no puede o no va a procesar el request por un error de sintaxis del cliente.
            error: 0
        }
       // console.log(req.body);
        console.log('API');

        return res.status(status.code).json({ "status": status.error });
    }


    public registerUser: RequestHandler = async (req: Request, res: Response): Promise<Response> => {


        let status: IStatus = {
            code: 400, // Bad Request. El servidor no puede o no va a procesar el request por un error de sintaxis del cliente.
            error: -4001
        }
        const data: IUser = req.body;
        
        if (data.name && data.email && data.password) {

            let _User = new User(
                "",
                data.name,
                data.email,
                data.password
            );

            try {
                //CODIGO EN EJECUCIÓN
                await new UserServices().registerUser(_User);
                //
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

    public loginUser: RequestHandler = async (req: Request, res: Response): Promise<Response> => {

        let status: IStatus = {
            code: 400, // Bad Request. El servidor no puede o no va a procesar el request por un error de sintaxis del cliente.
            error: -4001,
            data: {}
        }
        const data: IUser = req.body;

        if (data.email && data.password) {

            let _User = new User();

            _User.setEmail(data.email);
            _User.setPassword(data.password);

            try {

                let token: string | null = await new UserServices().loginUser(_User);

                status = {
                    code: 200,
                    error: 0,
                    data: token
                }
            } catch (e) {
                status = {
                    code: 200, // 200 OK. El request es correcto. Esta es la respuesta estándar para respuestas correctas.
                    error: e.error
                }
            }
        }
        return res.status(status.code).json({ "status": status });
    }

}



/// https://youtu.be/2jqok-WgelI?t=4181


//https://diego.com.es/codigos-de-estado-http