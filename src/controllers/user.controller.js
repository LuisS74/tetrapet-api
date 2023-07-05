import UserModel from '../models/user.model.js';
import PetModel from '../models/pet.model.js';

async function getUserPets(req, res) {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findById(userId);
        
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        const userPets = await PetModel.find({ owner: user._id });

        res.send(userPets);
    } catch (err) {
        res.status(500).send(err);
    }
}



export {
    getUserPets,
};