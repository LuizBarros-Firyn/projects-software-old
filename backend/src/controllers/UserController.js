const User = require('../models/User');

module.exports = {
    async store(request, response) {
        const { name, login, password, age, phone, email, person_identifier, company_name, city, uf, isFreelancer } = request.body

        const user = await User.create({
            name,
            login,
            password,
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