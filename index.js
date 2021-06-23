const { Environment } = require('./environment.js');
const express = require('express');

const server = express();

server.get('/', (request, response) => {
    response.send('Hello World!');
});
  
server.listen(Environment.port || 3000, () => {
    console.log(`Server UP on port ${Environment.port}`);
});