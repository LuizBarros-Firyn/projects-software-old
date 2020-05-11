const Project = require('../models/Project');

module.exports = {
    async index(request, response) {
        const projects = await Project.find({ team: { $exists: false } });

        return response.json(projects);
    },

};