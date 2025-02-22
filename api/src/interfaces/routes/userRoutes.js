import express from 'express';
import EntrepriseController from '../../interfaces/controllers/EntrepriseController.js';
import UserController from '../../interfaces/controllers/UserController.js';
import verifyTokenMiddleware from '../../interfaces/middlewares/verifyTokenMiddleware.js';
import { entrepriseService, userService, tokenAuthentification, employeeService } from '../../config/dependencyInjector.js';

const router = express.Router();

const entrepriseController = new EntrepriseController(entrepriseService);
const userController = new UserController(userService, employeeService);
const verifyToken = verifyTokenMiddleware(tokenAuthentification);

router.post('/user', (req, res) => entrepriseController.create(req, res));
router.post('/user/login', (req, res) => userController.login(req, res));
router.post('/user/logout', (req, res) => userController.logout(req, res));

router.get('/user/current', verifyToken, (req, res) => userController.getCurrentUser(req, res));

export default router;
