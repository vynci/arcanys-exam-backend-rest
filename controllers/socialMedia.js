var SocialMedia = require('../models/socialMedia.js');

var obj = {
	status : 'success',
	data : ''
};

exports.create = function(req, res) {
	var model = new SocialMedia({
		name : req.body.name || '',
		type : req.body.type || ''
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
	SocialMedia.find(function(err, result) {
		obj.data = result;
		res.send(obj);
	});
}


exports.update = (function(req, res) {
	var body = req.body;

	SocialMedia.findOneAndUpdate({_id: req.params.id}, { $set: body}, {new: true}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		obj.data = result;
		res.send(obj);
	});
});

exports.deleteItem = (function(req, res) {
	SocialMedia.findOneAndRemove({_id: req.params.id}, function (error, result) {
		if (error) {
			return res.json(error);
		}
		res.send('item successfully deleted');
	});
});