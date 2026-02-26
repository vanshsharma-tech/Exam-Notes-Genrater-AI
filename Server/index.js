import express from 'express';
import "dotenv/config";
import connectDb from './utils/connectDb.js';

const port = process.env.PORT || 8001; 
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'ExamNotes AI Backend is running!' });
});

connectDb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});