const Project = require('../models/Project');

module.exports = {
    async index(request, response) {
        const { user_id } = request.headers;

        const projects = await Project.find({ user: user_id, team: { $exists: true } }).populate('team', 'title').exec();

        return response.json(projects);
    },
};