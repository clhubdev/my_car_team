import express from 'express';
import BookingController from '../../interfaces/controllers/BookingController.js';
import { bookingService, tokenAuthentification } from '../../config/dependencyInjector.js';
import verifyTokenMiddleware from '../../interfaces/middlewares/verifyTokenMiddleware.js';

const router = express.Router();

const bookingController = new BookingController(bookingService);

const verifyToken = verifyTokenMiddleware(tokenAuthentification);


router.post('/booking', verifyToken, (req, res) => bookingController.create(req, res));

export default router;