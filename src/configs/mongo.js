import mongoose from "mongoose";
import { mongoURI }  from './environments.js'

export default function connectDB() {
    return mongoose
        .connect(mongoURI)
        .then((success) => {
            console.log("MongoDBB connected successfully");
            return true;
        })
        .catch((error) => {
            console.log(`MongoDB not connected. Error: ${error}`);
            return false;
        })
}
