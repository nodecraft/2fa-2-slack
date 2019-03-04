# 2fa-2-Slack

[![CircleCI](https://circleci.com/gh/nodecraft/2fa-2-slack.svg?style=svg)](https://circleci.com/gh/nodecraft/2fa-2-slack)

Micro-app to send SMS 2FA codes to a slack Channel. Ideal for teams that want a secure login, without the headaches of a single 2FA gatekeeper.


### Requirements
 - Twilio Phone number that supports SMS messaging
 - Slack Webhook URL
 - Publicly accessible ip with port `8888`


### Setup & Configuration

 - *(recommended)* Add emotes from [Slackmojis](https://slackmojis.com/) for
   - `:twitter:`
   - `:google:`
   - `:paypal:`
   - `:authy:`
   - `:stripe:`
- `npm install` to install dependancies
- Set your Twilio Message Callback URL to `http://your-hostname:8888/sms`
- Set your Twilio Voice Callback URL to `http://your-hostname:8888/voice` *(optional)*
- Update `config/slack.json` to reflect your Slack Webhook URL
- Update `config/numbers.json` to reflect your desired redirect number for voice calls
- Update `config/numbers.json` to add any additional numbers or adjust emotes *(optional)*
- `npm start` to start the application.


### Known supported Apps
The following services and phones work with this system:
 - Twitch.tv
 - Google accounts
 - Paypal
 - Stripe
 - Dialpad
 - Mobile Phones

### Unsupported Apps
These apps detect the phone number type or have refused to send SMS messages to Twilio:
 - Twitter
 - Amazon
 - Instagram


#### Roadmap
 - [ ] Add support for TOTP via commands
 - [ ] Add more phone numbers & apps icons
 - [ ] Convert app to Oauth2 based Slack app to provide button UI for claiming 2fa code.