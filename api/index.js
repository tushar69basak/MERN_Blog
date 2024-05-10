import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGOOSE)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const app = express();

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});

app.use('/api/user', userRoutes)
