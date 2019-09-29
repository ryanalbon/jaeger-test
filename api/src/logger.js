const pino = require('pino');

const { LOG_LEVEL } = require('./config');
const { name: appName, version: appVersion } = require('../package.json');

const logger = pino({ level: LOG_LEVEL }).child({ appName, appVersion });

module.exports = logger;
