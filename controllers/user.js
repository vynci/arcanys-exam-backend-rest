var User = require('../models/user.js');

var obj = {
	status : 'success',
	data : ''
};

exports.create = function(req, res) {
	var model = new User({
		fullName : req.body.fullName || '',
		email : req.body.email || '',
		phone : req.body.phone || '',
        inquiryType : req.body.inquiryType || '',
        message : req.body.message || ''
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
	User.find(function(err, result) {
		obj.data = result;
		res.send(obj);
	});
}


exports.update = (function(req, res) {
	var body = req.body;

	User.findOneAndUpdate({_id: req.params.id}, { $set: body}, {new: true}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		obj.data = result;
		res.send(obj);
	});
});

exports.deleteItem = (function(req, res) {
	User.findOneAndRemove({_id: req.params.id}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		res.send('item successfully deleted');
	});
});