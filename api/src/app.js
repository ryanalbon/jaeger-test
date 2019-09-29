const express = require('express');

const loggerMiddleware = require('./logger-middleware');

const app = express();

app.use(loggerMiddleware);

app.get('/status', (req, res) => res.status(200).end());

module.exports = app;
