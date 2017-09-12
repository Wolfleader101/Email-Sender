const nodemailer = require('nodemailer');
const fs = require('fs');
const date = require('./date.js');
const accntDetails = require('./account.json').details;
const { from, to, subject }= require('./email.json');


const htmlmsg = fs.readFileSync('./email-msg/email.html');
const msgfile = fs.readFileSync('./email-msg/message.txt', 'utf8');
const message = msgfile + '\n this email was sent on  ' + date.myDateTime();

const account = nodemailer.createTransport(accntDetails);

const email = {
  from,
  to,
  subject,
  text: message,
  html: htmlmsg
};

account.sendMail(email, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response + ' \n email was succesfully sent! \n time sent was  ' + date.myDateTime());
    console.log(msgfile);
  }
});
