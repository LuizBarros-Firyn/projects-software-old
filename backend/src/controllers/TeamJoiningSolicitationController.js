const TeamJoiningSolicitation = require('../models/TeamJoiningSolicitation');

module.exports = {
    async index(request, response) {
        const { team_id, user_id } = request.headers;

        const teamSolicitations = await TeamJoiningSolicitation.find({ team: team_id, team_owner: user_id }).populate({ path: 'user', select: 'techs name age' });

        return response.json(teamSolicitations);
    },
    
    async store(request, response) {
        const { user_id, team_id, team_owner } = request.headers;
        const { message } = request.body;

        const teamSolicitation = await TeamJoiningSolicitation.create({
            user: user_id,
            team: team_id,
            team_owner: team_owner,
            message 
        });

        return response.json(teamSolicitation);
    },

    async delete(request, response) {
        const { team_solicitation_id } = request.params
        const { user_id } = request.headers;

        await TeamJoiningSolicitation.deleteOne({ _id: team_solicitation_id, team_owner: user_id });

        return response.status(204).send();
    }
};