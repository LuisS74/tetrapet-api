import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

export { port, mongoURI };