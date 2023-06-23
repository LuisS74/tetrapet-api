import { Router } from 'express';
import { createUser, getUserPets } from '../controllers/user.controller.js';

const router = Router();

router.post('/user/register', createUser);
router.get('/users/:userId/pets', getUserPets);

export default router;