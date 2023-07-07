import UserModel from '../models/user.model.js';
import PetModel from '../models/pet.model.js';
import Chequeo from '../models/checkup.model.js';


async function getUserPets(req, res) {
    try {
        const user = await UserModel.findById(req.id).exec();

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const userPets = await PetModel.find({ owner: user.email });

        return res.status(200).send(userPets);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function getAllUserPets(req, res) {
    try {
        const allPets = await PetModel.find();

        return res.status(200).send(allPets);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function getCheckUps(req, res) {
    try {

        const user = await UserModel.find({ email: req.body.email}).exec();

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const checkups = await Chequeo.find({ useremail: user.email });

        return res.status(200).send(checkups);
    } catch (err) {
        res.status(500).send(err);
    }
}

export {
    getUserPets,
    getAllUserPets,
    getCheckUps
};