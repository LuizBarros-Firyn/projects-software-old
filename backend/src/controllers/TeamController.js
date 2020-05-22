const Team = require('../models/Team');
const User = require('../models/User');

module.exports = {
    async index(request, response) {
        const teams = await Team.find({ isHiring: true });

        return response.json(teams);
    },

    async store(request, response) {
        const { user_id } = request.headers;
        const { title, description } = request.body;

        const team = await Team.create({
            user: user_id,
            title,
            description
        });
        
        await User.findOneAndUpdate({ _id: user_id }, { team: team._id });

        return response.json(team);
    }
};