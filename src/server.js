'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const app = express();

app.use(express.json());

app.use(logger);
app.use(validator);


app.get('/', (req, res) => {
  res.status(200).send('This server works.');
});



app.get('/person', validator, (req, res) => {
  const { name } = req.query;
  res.status(200).send({ name: name });
});


app.get('/bad', (req, res) => {
  throw new Error('Error');
});


app.use('*', notFoundHandler);
app.use(errorHandler);




module.exports = {
  start: (port) => {
    {
      app.listen(port, () => {
        console.log(`listening on port ${port}`);
      });
    }
  },
};