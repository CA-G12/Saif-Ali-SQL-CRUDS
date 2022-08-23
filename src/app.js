const express = require('express');
const router = require('./routes');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(router);

module.exports = app;
