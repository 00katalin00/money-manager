import { Router } from 'express';
import UserController from '../Controllers/UserController';
import TestController from '../Controllers/TestController';
import Config from '../Settings';
import SecurityHOC from '../Middleware/SecurityHOC';

const UserRoutes = Router();

//REGISTRO DE USUARIOS
UserRoutes.post(`/api/v${Config.API_VERSION}/users/`, new UserController().registerUser);
UserRoutes.get(`/api/v${Config.API_VERSION}/users/`, new UserController().loginUser);
UserRoutes.get(`/api/v${Config.API_VERSION}/users/profile/`, new SecurityHOC().verifyToken, new UserController().getUserData);


//test
UserRoutes.get(`/`, new TestController().test);

export default UserRoutes;