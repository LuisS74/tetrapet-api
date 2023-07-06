import { Router } from 'express';
import { createUser, login, me } from '../controllers/auth.controller.js';
import { authRequired } from "../middlewares.js";

const router = Router();

router.post('/register', createUser);
router.post('/login', login);
router.get('/me', authRequired, me);

export default router;