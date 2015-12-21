var express = require("express");
var myParser = require("body-parser");
var nodemailer = require("nodemailer");
var app = express();
var cors = require('cors');

app.use(cors());
 

app.use(myParser.urlencoded({
	extended : true
}));
app.post("/sendEmail", function(request, response) {
	console.log(request.body);

	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
		service : 'Gmail',
		auth : {
			user : 'timorss@gmail.com',
			pass : 'mkhyef'
		}
	});

	// NB! No need to recreate the transporter object. You can use
	// the same transporter object for all e-mails

	// setup e-mail data with unicode symbols
	var mailOptions = {
		from : request.body.email, // sender address
		to : 'timorss@gmail.com', // list of receivers
		subject : 'Hello ✔', // Subject line
		text : request.body.content + ". From: " + request.body.sender, // plaintext body
		//html: '<b>Hello world ✔</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: ' + info.response);

	});

	response.send("ההודעה נשלחה בהצלחה! תודה רבה.");

});

app.listen(8024); 