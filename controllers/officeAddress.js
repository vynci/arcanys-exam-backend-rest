var OfficeAddress = require('../models/officeAddress.js');

var obj = {
	status : 'success',
	data : ''
};

exports.create = function(req, res) {
	console.log(req.body);
	var model = new OfficeAddress({
		name : req.body.name || '',
		city : req.body.city || '',		
		address1 : req.body.address1 || '',
		address2 : req.body.address2 || '',
		phone1 : req.body.phone1 || '',
		phone2 : req.body.phone2 || '',
	});

	model.save(function (err, result) {
		if (err){
			return res.json(err);
		}

		else {
			obj.data = result;
			return res.json(obj);
		}
	});
}

exports.get = function(req, res) {
	OfficeAddress.find(function(err, result) {
		obj.data = result;
		res.send(obj);
	});
}


exports.update = (function(req, res) {
	var body = req.body;

	OfficeAddress.findOneAndUpdate({_id: req.params.id}, { $set: body}, {new: true}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		obj.data = result;
		res.send(obj);
	});
});

exports.deleteItem = (function(req, res) {
	console.log(req.params.id);
	OfficeAddress.findOneAndRemove({_id: req.params.id}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		res.send({result:'item successfully deleted'});
	});
});