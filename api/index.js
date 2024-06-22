import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors';
import portfolioRoutes from './routes/portfolio.route.js';

 mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((err) => {
    console.log(err);
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser());

  app.listen(process.env.PORT, () => {
    console.log('Server listening on port 3000!');
  });

  app.use('/api', portfolioRoutes);

  
