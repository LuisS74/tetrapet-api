import Mascota from '../models/pet.model.js'
import UserModel from '../models/user.model.js';

async function registerPet(req, res) {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const registeredPet = await Mascota.create({
            name: req.body.name,
            petrut: req.body.petrut,
            animal: req.body.animal,
            race: req.body.race,
            chip: req.body.chip,
            owner: user._id
        });

        return res.status(201).send({ response: registeredPet });
    } catch (error) {
        return res.status(500).send({ error });
    }
}


async function updatePet(req, res) {
    try {
        const userId = req.params.userId;
        const updateRut = req.params.petRut;
        const updateInfo = req.body;

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const pet = await Mascota.findOneAndUpdate({ petrut: updateRut, owner: user._id }, updateInfo);
        if (!pet) {
            return res.status(404).json({ error: 'Mascota no encontrada' });
        }

        return res.status(200).json({ response: 'Mascota actualizada exitosamente' });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

async function deletePet(req, res) {
    try {
        const userId = req.params.userId;
        const deleteRut = req.params.petRut;

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const pet = await Mascota.findOneAndDelete({ petrut: deleteRut, owner: user._id });
        if (!pet) {
            return res.status(404).json({ error: 'Mascota no encontrada' });
        }

        return res.status(200).json({ response: 'Mascota eliminada exitosamente' });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

export { registerPet, updatePet, deletePet }