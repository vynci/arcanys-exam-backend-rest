var express = require('express')
, mongoose = require('mongoose')
, app = module.exports = express()
, cors = require('cors')
, bodyParser = require('body-parser')
, methodOverride = require('method-override')

, env = process.env.NODE_ENV || 'production'
, config = require('./config')[env]

var port = Number(process.env.PORT || 3000);

// connect to Mongo when the app initializes
console.log(config.db);
mongoose.connect(config.db);

mongoose.connection.on('connected', function(){
	console.log('connected')
});

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(cors());

var userApi = require('./controllers/user.js');
var officeAddressApi = require('./controllers/officeAddress.js');
var socialMediaApi = require('./controllers/socialMedia.js');
var inquiriesApi = require('./controllers/inquiries.js');

app.post('/v1/api/user', userApi.create);
app.get('/v1/api/user', userApi.get);

app.post('/v1/api/office-address', officeAddressApi.create);
app.get('/v1/api/office-address/', officeAddressApi.get);
app.put('/v1/api/office-address/:id', officeAddressApi.update);
app.delete('/v1/api/office-address/:id', officeAddressApi.deleteItem);

app.post('/v1/api/inquiries', inquiriesApi.create);
app.get('/v1/api/inquiries/', inquiriesApi.get);
app.put('/v1/api/inquiries/:id', inquiriesApi.update);
app.delete('/v1/api/inquiries/:id', inquiriesApi.deleteItem);

app.post('/v1/api/social-media', socialMediaApi.create);
app.get('/v1/api/social-media/', socialMediaApi.get);
app.put('/v1/api/social-media/:id', socialMediaApi.update);
app.delete('/v1/api/social-media/:id', socialMediaApi.deleteItem);

var server = app.listen(port, function() {
	console.log("Express server listening on port %d", server.address().port);
});