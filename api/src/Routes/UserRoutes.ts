import { Router } from 'express';
import UserController from '../Controllers/UserController';
import Config from '../Settings';
import SecurityHOC from '../Middleware/SecurityHOC';

const UserRoutes = Router();

//REGISTRO DE USUARIOS
UserRoutes.post(`/api/v${Config.API_VERSION}/users/`, new UserController().registerUser);
UserRoutes.get(`/api/v${Config.API_VERSION}/users/`, new UserController().loginUser);
UserRoutes.get(`/api/v${Config.API_VERSION}/users/profile/`, new SecurityHOC().verifyToken, new UserController().getUserData);

export default UserRoutes;