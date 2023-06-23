import mongoose from "mongoose";
import { mongoURI }  from './environment.js'

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
