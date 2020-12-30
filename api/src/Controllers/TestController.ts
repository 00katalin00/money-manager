import { RequestHandler, Request, Response } from 'express';
import IStatus from '../Interfaces/IStatus';


export default class UserController {


    public test: RequestHandler = async (req: Request, res: Response): Promise<Response> => {


        let status: IStatus = {
            code: 200, // Bad Request. El servidor no puede o no va a procesar el request por un error de sintaxis del cliente.
            error: -99999
        }


        console.log(Date.parse("2020-12-30 11:14:32.254"));
        //

        return res.status(status.code).json({ "status": status.error });
    }


}

// https://www.epochconverter.com
// https://www.w3schools.com/js/js_dates.asp
// EL MES EMPIEZA POR 0  -> 0 = ENERO...