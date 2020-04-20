const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// for safety purposes, insert your own mongo db connection url below.
mongoose.connect('<mongodbconnectionurl>',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);