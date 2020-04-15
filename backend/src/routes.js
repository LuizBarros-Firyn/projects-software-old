const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send("API connected");
});

module.exports = routes;