require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
//calling Database

const connectDB = require('./config/db');
connectDB();
app.use(express.json());

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