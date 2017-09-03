var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var schema = new Schema({
    createdDate: {type: Date, default: Date.now},
    name: String,
    city: String,
    address1: String,
    address2: String,
    phone1: String,
    phone2: String
});

module.exports = mongoose.model('OfficeAddress', schema);