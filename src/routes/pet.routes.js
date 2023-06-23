import { Router } from 'express';
import { registerPet, updatePet, deletePet } from '../controllers/pet.controller.js';

const router = Router();

router.post('/:userId/register', registerPet);
router.put('/:userId/edit/:petRut', updatePet);
router.delete('/:userId/delete/:petRut', deletePet)

export default router; 