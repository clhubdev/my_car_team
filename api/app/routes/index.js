import express from 'express';
import users from './user.routes.js';

const router = express.Router();

router.use(users);

export default router; 