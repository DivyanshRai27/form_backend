const express = require('express');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')

//chunk 1
const app = express();
const path = require('path')
const PORT = 8080

//view engine setup
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//body-parser-middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//static folder
app.use('/public', express.static(path.join(__dirname, 'public/')))


app.get('/', (req, res) => {
    res.render('contact', {layout: false})
})

app.post('/send', (req, res) => {
    const output = `
    <p>You have new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        
    </ul>

    <h3>Message</h3>
    <p>Message: ${req.body.message}</p>
    
    `

    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  tls:{
    rejectUnuthorized: false
  }

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  req.render('sent', {layout: false})
})

app.listen(PORT, () => {
    console.log('Server is running on port 8080')
});