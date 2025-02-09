import express from 'express';
import { RouteController } from '../controllers/index.js';
import OpenRouteService from '../utils/Geocoding.js';

const router = express.Router();

router.get('/route/suggestions/:query', RouteController.getSuggestions);

router.get('/route/getCoordinates/:address', async (req, res) => {
    const address = req.params.address;
    const result = await OpenRouteService.getCoordinates(address);
    res.status(200).json(result);
});

export default router;
