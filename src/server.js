'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();

const logger = require('./middleware/logger');

app.use(logger);


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