const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// for safety purposes, insert your own mongo db connection url below.
mongoose.connect('mongodb+srv://firyn-projects-software_71:FareNit888zX@projects-software-qmx32-doiia.mongodb.net/projects-software?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);