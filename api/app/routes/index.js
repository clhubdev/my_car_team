import express from 'express';
import users from './user.routes.js';
import route from './route.routes.js'

const router = express.Router();

router.use(users);
router.use(route);

export default router; 