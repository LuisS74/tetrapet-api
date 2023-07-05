import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;
const SECRET = process.env.SECRET;

export { port, mongoURI, SECRET };