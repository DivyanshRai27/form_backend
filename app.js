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
    res.render('contact',  {layout: false})
})

app.post('/send', (req, res) => {
    const output = `
    <p>You have new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.company}</li>
        <li>Name: ${req.body.email}</li>
        <li>Name: ${req.body.phone}</li>
    </ul>
    
    `
})

app.listen(PORT, () => {
    console.log('Server is running on port 8080')
});