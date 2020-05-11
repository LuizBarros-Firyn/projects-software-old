const Team = require('../models/Team');

module.exports = {
    async store(request, response) {
        const { user_id } = request.headers;
        const { title } = request.body;

        const team = await Team.create({
            user: user_id,
            title
        });

        return response.json(team);
    }
};