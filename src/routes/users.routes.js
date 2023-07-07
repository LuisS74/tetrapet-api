import { Router } from 'express';
import { getUserPets, getAllUserPets, getCheckUps } from '../controllers/user.controller.js';
import { authRequired } from "../middlewares.js";

const router = Router();

router.get('/users/pets', authRequired, getUserPets);
router.get('/users/all/pets', authRequired, getAllUserPets);
router.get('/users/checkups', authRequired, getCheckUps);

export default router;