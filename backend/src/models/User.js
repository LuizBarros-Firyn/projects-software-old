const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String,
    age: Number,
    phone: String,
    email: String,
    photo: String,
    person_identifier: String, // cpf/cnpj
    company_name: String,
    city: String,
    uf: String,
    isFreelancer: Boolean // user type
});

module.exports = mongoose.model('User', UserSchema);