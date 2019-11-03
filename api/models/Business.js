const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Collection and Schema for Business
let Business = new Schema({
    person_name: {
        type: String
    },
    business_name: {
        type: String
    },
    business_gst_number: {
        type: Number
    }
}, {
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);