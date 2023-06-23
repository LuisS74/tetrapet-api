import { Router } from 'express';
import { registerPet, updatePet, deletePet } from '../controllers/pet.controller.js';

const router = Router();

router.post('/register', registerPet);
router.put('/edit/:petId', updatePet);
router.delete('/delete/:petId', deletePet)

export default router; 