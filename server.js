require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
//calling Database

const connectDB = require('./config/db');
connectDB();
app.use(express.json());

//cors

const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
    // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
  }
  app.use(cors(corsOptions))

//Routes

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


// templete engine

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');



const PORT = process.env.PORT || 3000;
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});