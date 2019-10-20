const express = require('express');
const jaegerClient = require('jaeger-client');

const logger = require('./logger');
const loggerMiddleware = require('./logger-middleware');
const { name: serviceName } = require('../package.json');

const tracerConfig = {
  serviceName,
  reporter: {
    collectorEndpoint: 'http://jaeger:14268/api/traces',
  },
  sampler: {
    type: 'const',
    param: 1,
  },
};

const tracer = jaegerClient.initTracer(tracerConfig, { logger });
const app = express();

app.use(loggerMiddleware);

app.get('/status', (req, res) => res.status(200).end());

app.get('/api/v1/people', (req, res) => {
  const span = tracer.startSpan('getPeople');

  res.status(200).json({ data: [{ name: 'Alice' }, { name: 'Bob' }] }).end();

  span.finish();
});

module.exports = app;
