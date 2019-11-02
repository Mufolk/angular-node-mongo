//Import the required modules

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');

//Connects the DB
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { userNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Couldnt connect to the Database ' + err) } 
);

//Here we starts the App
const app = express();
app.use(bodyParser.json()); // supports parsing of application/json type post data
app.use(cors()); //alows cross-domain requests
const port = process.env.PORT || 4000;

const server = app.listen(()=>{
    console.log('Listening on port: ' +  port);
});