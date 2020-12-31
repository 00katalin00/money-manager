import Config from '../Settings';
import Istatus from '../Interfaces/IStatus';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import CustomException from '../Exception/CustomException';
export default class SecurityHOC {

    public async verifyToken(req: Request, res: Response, next: any) {
        console.log("MIDDLEWARE");

        let status: Istatus = {
            code: 401,
            error: -99,
            data: "ACCESS DENIED"
        }

        const token = req.header('auth-token');

        try {

            if (!token) {
                status = {
                    code: 401,
                    error: -99,
                    data: "ACCESS DENIED"
                }
                throw new CustomException(-99);
            }

            const verified = jwt.verify(token, Config.SECRET_KEY);
            console.log(verified);

            next();

        } catch (e) {
            res.status(status.code).send(status);
        }

    }
}

/*
export default function (req: Request, res: Response, next: any){
    console.log("MIDDLEWARE");

    let status: Istatus = {
        code: 400,
        error: -99
    }

    const token = req.header('auth-token');

    if (token) {

        try {

            const verified = jwt.verify(token, Config.SECRET_KEY);
            console.log(verified);
            console.log(req.header.name);


            next();

        } catch (e) {
            console.log(e);
            status = {
                code: 400,
                error: e.error,
                data: "INVALID TOKEN"
            }
        }

    } else {
        status = {
            code: 401,
            error: -99,
            data: "ACCESS DENIED"
        }
    }
}
*/