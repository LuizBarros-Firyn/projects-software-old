const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    title: String,
    description: String,
    isHiring: Boolean,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Team', TeamSchema);