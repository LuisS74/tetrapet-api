import { Router } from 'express';
import { getUserPets } from '../controllers/user.controller.js';
import { authRequired } from "../middlewares.js";

const router = Router();

router.get('/users/pets', authRequired, getUserPets);

export default router;