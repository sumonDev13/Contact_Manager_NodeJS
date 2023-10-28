import express from 'express';
import dotenv from 'dotenv';
import router from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(express.json());
app.use(errorHandler);
dotenv.config();

const port = process.env.PORT;

app.use('/api/contacts',router)

app.listen(port,() => {
    console.log(`listening on ${port}`)
});