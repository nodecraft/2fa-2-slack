'use strict';
module.exports = function(app){
	const SlackWebhook = require('slack-webhook');
	app.slack = new SlackWebhook(app.config.slack.webhookURL, app.config.slack.config);
};