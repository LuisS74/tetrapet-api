import Mascota from '../models/pet.model.js'
import UserModel from '../models/user.model.js';

async function registerPet(req, res) {
    try {
        const user = await UserModel.findById(req.id).exec();

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const registeredPet = await Mascota.create({
            name: req.body.name,
            petrut: req.body.petrut,
            animal: req.body.animal,
            race: req.body.race,
            chip: req.body.chip,
            owner: user.id
        });

        return res.status(201).send({ response: registeredPet });
    } catch (error) {
        return res.status(500).send({ error });
    }
}


async function updatePet(req, res) {
    try {
        const updateRut = req.params.petRut;
        const updateInfo = req.body;

        const user = await UserModel.findById(req.id).exec();
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const pet = await Mascota.findOneAndUpdate({ petrut: updateRut, owner: user.id }, updateInfo);
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
        const user = await UserModel.findById(req.id).exec();
        const deleteRut = req.params.petRut;

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const pet = await Mascota.findOneAndDelete({ petrut: deleteRut, owner: user.id });
        if (!pet) {
            return res.status(404).json({ error: 'Mascota no encontrada' });
        }

        return res.status(200).json({ response: 'Mascota eliminada exitosamente' });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

export { registerPet, updatePet, deletePet }