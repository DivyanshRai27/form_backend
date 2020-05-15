const express = require('express');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')

//chunk 1
const app = express();
const log = console.log;
const path = require('path')

//view engine setup
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//body-parser-middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = 8080

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(PORT, () => {
    log('Server is running on port 8080')
});