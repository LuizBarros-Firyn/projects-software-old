const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/users', (request, response) => { 
    return response.json({ message: 'ok' })
 });
routes.post('/users', upload.single('photo'), UserController.store);

module.exports = routes;