import { Router } from 'express';
import { getUserPets } from '../controllers/user.controller.js';

const router = Router();

router.get('/users/:userId/pets', getUserPets);

export default router;