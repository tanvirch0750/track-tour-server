import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
dotenv.config();

const port = 5000;
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cors());

const MONGODB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.g0uak.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log('Listening to track-tour port', port);
    });
  })
  .catch((err) => console.log(console.log(err)));

app.get('/', (req, res) => {
  res.send('track tour server is running');
});
