const { Environment } = require('./environment.js');
const express = require('express');

const server = express();
const port = Environment.port || 3000;

server.get('/', (request, response) => {
    response.send('Hello World!');
});
  
server.listen(port, () => {
    console.log(`Server UP on port ${port}`);
});