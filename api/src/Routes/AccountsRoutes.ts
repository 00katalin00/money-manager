import { Router } from 'express';
import AccountsController from '../Controllers/AccountsController';
import Config from '../Settings';

const AccountsRoutes = Router();

//REGISTRO DE USUARIOS
AccountsRoutes.post(`/api/v${Config.API_VERSION}/accounts/`, new AccountsController().registerAccount);

export default AccountsRoutes;