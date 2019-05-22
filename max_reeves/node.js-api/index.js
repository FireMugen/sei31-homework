const express = require('express');
const ejs = require('ejs');
const accountSid = 'ACda109222d4f44941eade7abd5e4e778f';
const authToken = 'a46cfea1a1b81935ff1c9211f5c7fe51';
const client = require('twilio')(accountSid, authToken);
const at = require('at-quotes');

const server = express();
server.set('view-engine', 'ejs');

const PORT = 7777;

server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/sent', (req, res, next) => {

	//this gets the value from the form
	const message = req.query.message;
	const phoneNumber = req.query.number;
	client.messages
	  .create({
	     body: message,
	     from: '+61429800861',
	     to: `+61${phoneNumber}`
	   })
	  .then((sent) => {
    res.render('sent.ejs');
  });;
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));
