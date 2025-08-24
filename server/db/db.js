const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDb() {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB>>>>>>>");
}

module.exports = connectToDb;