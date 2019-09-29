const expressPinoLogger = require('express-pino-logger');

const logger = require('./logger');

const loggerMiddleware = expressPinoLogger({ logger });

module.exports = loggerMiddleware;
