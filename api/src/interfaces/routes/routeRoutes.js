import express from 'express';
import RouteController from '../../interfaces/controllers/RouteController.js';
import { routeService, tokenAuthentification } from '../../config/dependencyInjector.js';
import verifyTokenMiddleware from '../../interfaces/middlewares/verifyTokenMiddleware.js';

const router = express.Router();

const routeController = new RouteController(routeService);
const verifyToken = verifyTokenMiddleware(tokenAuthentification);


router.post('/route', verifyToken, (req, res) => routeController.createRoute(req, res));

router.get('/route/:entrepriseId', verifyToken, (req, res) => routeController.getAllRoutesByEntreprise(req, res));
router.get('/route/suggestions/:query', verifyToken, (req, res) => routeController.getSuggestions(req, res));
router.get('/route/getCoordinates/:address', verifyToken, (req, res) => routeController.getCoordinates(req, res));


export default router;
