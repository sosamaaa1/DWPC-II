#!/usr/bin/env node

/**
 * Module dependencies.
 */

import http from 'http';
import app from '../app';

// Importing winston logger
import log from '../config/winston';

// Importing configuration keys
import configKeys from '../config/configKeys';

// Importing db connection function
import connectWithRetry from '../database/mongooseConnection';

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(configKeys.PORT);
app.set('port', port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      log.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Create HTTP server.
 */

const server = http.createServer(app); // (req, res)=>{...}
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  log.info(`📢 Listening on ${bind}`);
}

// Launching db connection
connectWithRetry(configKeys.MONGO_URL);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError); // callback
server.on('listening', onListening);
