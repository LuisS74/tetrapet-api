import { Router } from 'express';
import { registerPet, updatePet, deletePet, setCheckUp, updateCheckUp } from '../controllers/pet.controller.js';
import { authRequired } from "../middlewares.js";

const router = Router();

//router.post('/register', authRequired, registerPet);
router.post('/register', registerPet);
router.put('/edit/:petRut', authRequired, updatePet);
router.delete('/delete/:petRut', authRequired, deletePet);
//router.post('/checkup/:petRut/add', authRequired, setCheckUp);
router.post('/checkup/:petRut/add', setCheckUp);
router.put('/checkup/:petRut/edit', authRequired, updateCheckUp);

export default router; 