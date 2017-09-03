var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var schema = new Schema({
    createdDate: {type: Date, default: Date.now},
    fullName: String,
    email: String,
    phone: String,
    inquiryType: String,
    message: String
});

module.exports = mongoose.model('Inquiries', schema);