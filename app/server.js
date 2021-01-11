'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Architecture Refresh Team! attempting to test build triggers :) \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
