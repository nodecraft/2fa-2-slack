'use strict';
module.exports = function(app){
	const _ = require('lodash');

	app.server.post('/sms', function(req, res){
		let title = "2FA Code",
			lookup = _.get(app.config, 'numbers.lookup.' + req.body.From),
			defaults = {};
		if(lookup){
			title = _.capitalize(lookup) + " " + title;
			defaults = _.cloneDeep(_.get(app.config, 'numbers.' + lookup, {}));
		}
		let payload = _.defaults(defaults, {
			username: title,
			attachments: [
				{
					color: defaults.color || "#0EA7E7",
					fields: [
						{
							title: "Code",
							value: req.body.Body
						}
					]
				}
			]
		});
		if(!lookup){
			payload.fields.push({
				title: "Number",
				value: req.body.From
			});
		}
		app.log('Received SMS from %s', lookup || req.body.From).debug(req.body);
		app.slack.send(payload, function(err){
			if(err){
				res.status(500);
			}
			res.json({
				success: (err === null ? true : false)
			});
		});
	});
};
