const User = require('../models/User');

module.exports = {
    async store(request, response) {
        const { name, age, phone, email, person_identifier, company_name, city, uf, isFreelancer } = request.body

        const user = await User.create({
            name,
            age,
            phone,
            email,
            photo: '',
            person_identifier,
            company_name,
            city,
            uf,
            isFreelancer
        });

        return response.json(user);
    }
};