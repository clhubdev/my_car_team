import express from 'express';
import userRoutes from './userRoutes.js';
import routeRoutes from './routeRoutes.js';
import bookingRoutes from './bookingRoutes.js';

const router = express.Router();

router.use(userRoutes);
router.use(routeRoutes);
router.use(bookingRoutes);

export default router; 