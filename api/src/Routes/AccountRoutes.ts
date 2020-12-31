import { Router } from 'express';
import UserController from '../Controllers/UserController';
import TestController from '../Controllers/TestController';
import Config from '../Settings';
import SecurityHOC from '../Middleware/SecurityHOC';
import AccountController from '../Controllers/AccountController';
const AccountRoutes = Router();

AccountRoutes.post(`/api/v${Config.API_VERSION}/accounts/`, new SecurityHOC().verifyToken, new AccountController().createNewAccount);


export default AccountRoutes;