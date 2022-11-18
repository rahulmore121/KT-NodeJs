// The Nodemailer Module
// The Nodemailer module makes it easy to send emails from your computer.
// The Nodemailer module can be downloaded and installed using npm
// npm install nodemailer

// Use the username and password from your selected email provider to send an email. 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahulmoreb121@gmail.com',
    pass: '8152063309rahul'
  }
});

var mailOptions = {
  from: 'rahulmoreb121@gmail.com',
  to: 'rahulmoreb@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'THis is mail from node js',
  attachments:[{
    filename:"index.html",path:"C:\Users\262203\Desktop\Typescript\nodejs\index.html"
  }]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});



// Multiple Receivers
// To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas:


// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   }