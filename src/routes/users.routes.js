import { Router } from 'express';
import { getUserPets, getCheckUps } from '../controllers/user.controller.js';
import { authRequired } from "../middlewares.js";

const router = Router();

router.get('/users/pets', authRequired, getUserPets);
router.get('/users/checkups', authRequired, getCheckUps);

export default router;