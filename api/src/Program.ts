import express, { Application } from 'express';
import morgan from 'morgan';
import Config from './Settings';

import AccountsRoutes from './Routes/AccountsRoutes';

export default class Program {

    private _Server: Application;


    constructor() {
        this._Server = express();
        this.settings();
        this.middlewares();
        this.routes(); //ROUTER SIEMPRE AL FINAL
    }

    //CONFIGURACIÓN API

    private settings() {
        this._Server.set('port', Config.API_PORT);
    }

    //MIDDLEWARES

    private middlewares() {
        this._Server.use(morgan('dev'));

        this._Server.use(express.json());
        this._Server.use(express.urlencoded({ extended: false }));

        this._Server.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
            next();
        });
    }

    //ROUTES
    private routes() {
        this._Server.use(AccountsRoutes);
    }

    async main(args?: String[]): Promise<void> {

        try {
            await this._Server.listen(this._Server.get('port'));
            console.log("SERVER STATUS: RUNNING ON", this._Server.get('port'));

        } catch (e) {
            console.log("SERVER STATUS: FAIL");
            console.log(e);
        }


    }


}

new Program().main();