import { Router } from 'express';
import AccountsController from '../Controllers/UserController';
import TestController from '../Controllers/TestController';
import Config from '../Settings';

const UserRoutes = Router();

//REGISTRO DE USUARIOS
UserRoutes.post(`/api/v${Config.API_VERSION}/users/`, new AccountsController().registerUser);


//test
UserRoutes.get(`/`, new TestController().test);

export default UserRoutes;