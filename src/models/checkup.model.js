import mongoose from "mongoose";

const checkupSchema = new mongoose.Schema({
    useremail: {
        type: String,
        required: true
    },
    petrut: {
        type: String,
        required: true,
        unique: true
    },
    checkdatetime: {
        type: Date,
        required: true,
    },
});

const checkupModel = mongoose.model("Chequeo", checkupSchema);

export default checkupModel;