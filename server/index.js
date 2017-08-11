const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.static('dist'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(8000, () => {
  console.log('listening on port 8000...');
});
