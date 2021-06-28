'use strict';

const express = require('express');
const app = express();
app.use(express.json());


const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');


app.use(logger);
// app.use(validator);


app.get('/', (req, res) => {
  res.send('Hello From mohammad.');
});


app.get('/person', validator, (req, res) => {
  const output = {
    name: req.query.name,
  };
  res.json(output);
});



app.use('*', notFoundHandler);
app.use(errorHandler);



// start function
function start(port) {
  app.listen(port, () => {
    console.log(`app is listening on the port ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};