const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/s37');

app.use(express.static('dist'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(8000, () => {
  console.log('listening on port 8000...');
});
