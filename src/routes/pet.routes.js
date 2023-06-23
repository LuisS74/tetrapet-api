import { Router } from 'express';
import { registerPet } from '../controllers/pet.controller.js';

const router = Router();

router.post('/register', registerPet)

export default router; 