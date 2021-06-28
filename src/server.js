'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('../src/middleware/validator');

const app = express();



app.use(logger);
app.use(validator);


app.get('/', (req, res) => {
  res.send('This server works.');
});
 

app.get('/person', (req, res) => {
  const output = {
    name: req.query.name,
  };
  res.json(output);
});


app.get('/bad',(req,res)=>{
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