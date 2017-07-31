var http = require('http'),
	path = require('path'),
	shorturl = require('shorturl'),
	fs = require('fs'),
	querystring = require('querystring'),
	request = require('request');

var options = {
	host: 'api.amp.active.com';
	api_key = '8tkvsxun2uh6jm26vskemegy'
};

// var config_file = path.join(__dirname);

var query = querystring.stringify()
var parameters = {
	landmarkLat: '',
	landmarkLong: '',
	amenity: {}
}

exports.formQuery = function(req, res) {
	http.get(options, function(res){
		var body = '';
		res.on('data', function(){

		});
		res.on('end', function(){
			var parsed = JSON.parse(body);
			callback({
				email: parsed.email,
				password: parsed.pass
			});
		});
	});
}
