import { Router } from 'express';
import { registerPet, updatePet, deletePet } from '../controllers/pet.controller.js';
import { authRequired } from "../middlewares.js";

const router = Router();

router.post('/register', authRequired, registerPet);
router.put('/edit/:petRut', authRequired, updatePet);
router.delete('/delete/:petRut', authRequired, deletePet)

export default router; 