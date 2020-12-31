import Config from '../Settings';
import Istatus from '../Interfaces/IStatus';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import CustomException from '../Exception/CustomException';
export default class SecurityHOC {

    public async verifyToken(req: Request, res: Response, next: any) {

        const token = req.header('auth-token');

        let status: Istatus = {
            code: 401,
            error: -99,
            data: "ACCESS DENIED"
        }

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

            if (typeof (verified) === "object") {
                const values = Object.values(verified);

                req.headers['uid'] = values[0];

                next();
            } else {
                throw new CustomException(-98);
            }

        } catch (e) {
            status = {
                ...status,
                error: e.error
            }
            res.status(status.code).send(status);
        }

    }
}