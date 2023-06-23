import Mascota from '../models/pet.model.js'

async function registerPet(req, res){
    try{
        const registeredPet = await Mascota.create({
            name: req.body.name,
            petrut: req.body.petrut,
            animal: req.body.animal,
            race: req.body.race,
            chip: req.body.chip,
            owner: req.body.owner
        });
        return res.status(201).send({ response: registeredPet}); 
    } catch (error) {
        return res.status(500).send({ error });
    }
}

function updatePet (req, res){
    const updateId = req.param.petId;

}

async function deletePet (req, res){
    try{
        const deleteRut = req.param.petId;
        const pet = await Mascota.deleteOne({petrut: deleteRut});
        res.send(pet)
    } catch (error){
        return res.status(500).send({ error })
    }
}
export {registerPet, updatePet, deletePet}