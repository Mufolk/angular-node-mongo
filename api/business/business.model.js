const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Collection and Schema for Business
//Schema is the shape of the Document
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
    //Collection is a 'table'
    collection: 'business'
});

//model is the creator of the document that uses the collection
//Documents are the instance of a schema that is recorde into a coellection
module.exports = mongoose.model('Business', Business);