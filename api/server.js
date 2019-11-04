//Import the required modules

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');

//Connects the DB
//call the models
const businessRoute = require('./routes/business.route');
mongoose.Promise = global.Promise;
// mongoose.connect(config.DB, { userNewUrlParser: true }).then(
//     () => { console.log('Database is connected') },
//     err => { console.log('Couldnt connect to the Database ' + err) } 
// );
//DB Config
const db = require('./config/database.js');
const configuration = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
//Connect to mongoose
mongoose.connect(db.mongoURI, configuration)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Here we starts the App
const app = express();
app.use(bodyParser.json()); // supports parsing of application/json type post data
app.use(cors()); //alows cross-domain requests
app.use('/business', businessRoute);
const port = 4000;

const server = app.listen(port, ()=>{
    console.log('Listening on port: ' +  port);
});