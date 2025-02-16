import express from 'express';
import RouteController from '../../interfaces/controllers/RouteController.js';
import { routeService } from '../../config/dependencyInjector.js';

const router = express.Router();

const routeController = new RouteController(routeService);

router.post('/route', (req, res) => routeController.createRoute(req, res));
router.get('/route/suggestions/:query', (req, res) => routeController.getSuggestions(req, res));
router.get('/route/getCoordinates/:address', (req, res) => routeController.getCoordinates(req, res));


export default router;
