const express = require('express');
const morgan = require('morgan');
const config = require('./config');
require('colors')
const routesNetwork = require('./network/routes')


const server = express();
server.use(morgan('dev'))
server.use(express.json())

const port = config.port;
const host = config.host;

routesNetwork(server)

server.listen(port, host, () => {
    console.log(`Server running on ${host}:${port}`)
});