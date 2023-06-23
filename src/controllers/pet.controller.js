import Mascota from '../models/pet.model.js'

async function registerPet(req, res){
    try{
        const registeredPet = await Mascota.create({
            name: req.body.name,
            petrut: req.body.petrut,
            animal: req.body.animal,
            race: req.body.name,
            chip: req.body.chip,
            owner: req.body.owner
        });
        return res.status(201).send({ response: registeredPet}); 
    } catch (error) {
        return res.status(500).send({ error });
    }
}

export {registerPet}