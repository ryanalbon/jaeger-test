const config = {
  HOST: process.env.HOST || '0.0.0.0',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  PORT: process.env.PORT || '8080',
};

module.exports = config;
