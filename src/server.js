'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();



app.get('/', (req, res) => {
  res.send('This server works.');
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