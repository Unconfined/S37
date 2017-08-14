const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/s37');

const db = mongoose.connection;
console.log('db');
