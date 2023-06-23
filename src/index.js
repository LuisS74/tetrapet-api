import express from 'express';
import petRoutes from './routes/pet.routes.js'
import cors from 'cors';
import { port } from './configs/environment.js'
import connectDB from './configs/mongo.js';

const app = express();

app.use(cors());
app.use(express.json());

        //ruta padre de endpoints de user.routes.js
app.use('/pet', petRoutes);

async function startServer() { 
        const isConnected = await connectDB();
        if (isConnected) {
                app.listen(port, () => {
                        console.log(`Server started on ${port}`);
                });
        } else {
                process.exit();
        } 
}

startServer();