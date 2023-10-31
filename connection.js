const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;


const db = mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,//bestest faster route shortcut types
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to mongodb');
}).catch(error => {
    console.error('error', error);
});

module.exports = db