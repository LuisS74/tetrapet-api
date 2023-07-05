import UserModel from '../models/user.model.js';
import PetModel from '../models/pet.model.js';


async function getUserPets(req, res) {
    try {
        const user = await UserModel.findById(req.id).exec();

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const userPets = await PetModel.find({ owner: user.id });

        return res.status(200).send(userPets);
    } catch (err) {
        res.status(500).send(err);
    }
}

export {
    getUserPets,
};