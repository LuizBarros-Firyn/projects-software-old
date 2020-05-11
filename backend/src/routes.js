const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const TeamController = require('./controllers/TeamController');
const ProjectController = require('./controllers/ProjectController');
const ProjectTeamAssignmentController = require('./controllers/ProjectTeamAssignmentController');
const OfferController = require('./controllers/OfferController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.show);
routes.post('/users', upload.single('photo'), UserController.store);

routes.post('/teams', TeamController.store);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);

routes.get('/projects_team_assignments', ProjectTeamAssignmentController.index);

routes.post('/offers', OfferController.store);

module.exports = routes;