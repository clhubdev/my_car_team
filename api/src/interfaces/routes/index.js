import express from 'express';
import userRoutes from './userRoutes.js';
import routeRoutes from './routeRoutes.js';

const router = express.Router();

router.use(userRoutes);
router.use(routeRoutes);

export default router; 