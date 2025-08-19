import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.listen(5000, () => console.log('Servidor backend en puerto 5000'));
