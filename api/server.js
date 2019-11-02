//Import the required modules

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = ('cors');
const mongoose = ('mongoose');

//Here we starts the App
const app = express();
let port = process.env.PORT || 4000;

const server = app.listen(()=>{
    console.log('Listening on port: ' +  port);
});