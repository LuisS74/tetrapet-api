import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    petrut: {
        type: String,
        required: true,
        unique: true
    },
    animal: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: false,
    },
    chip: {
        type: Boolean,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
});

const petModel = mongoose.model("Mascota", petSchema);

export default petModel;