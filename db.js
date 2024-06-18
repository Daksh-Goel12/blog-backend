const mongoose = require('mongoose');
require('dotenv').config();    

mongoose.connect(process.env.MONGO_URL, { 
    dbName: process.env.dbName 
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});