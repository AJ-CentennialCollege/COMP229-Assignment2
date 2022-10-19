// COMP229 - AJ Balbacal 301084026

import debug from 'debug';
debug('comp-229');
import http from 'http';

import app from './app/app.js';

// Get Port

const PORT = normalizePort(process.env.PORT || 3000);
app.set('port', PORT);

// Create http server

const server = http.createServer(app);

// listen from the ports of all network interface

server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);

// function to normalize port

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// function for error event on server

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

// handle specific listen errors with friendly messages

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// event listener

function onListening() 
{
  let addr = server.address();
  let bind = 'pipe ' + addr;
  debug('Listening on ' + bind);
}
