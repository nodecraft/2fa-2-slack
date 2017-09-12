'use strict';
module.exports = function(app){
	app.server.post('/voice', function(req, res){
		res.send('<?xml version="1.0" encoding="UTF-8"?><Response><Dial>' + app.config.numbers.voiceRedirect + '</Dial></Response>');
	});
};