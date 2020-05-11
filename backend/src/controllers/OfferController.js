const Offer = require('../models/Offer');
const Project = require('../models/Project');

module.exports = {
    async index(request, response) {
        
    },

    async store(request, response) {
        const { project_id, team_id } = request.headers;
        const { price, description, start_date, finish_date } = request.body;

        const project_creator = await Project.findOne({ _id : project_id });

        const offer = await Offer.create({
            project: project_id,
            team: team_id,
            project_creator: project_creator.user,
            price,
            description,
            start_date,
            finish_date,
        });

        return response.json(offer);
    }
};