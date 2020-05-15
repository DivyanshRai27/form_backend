const express = require('express');

//chunk 1
const app = express();
const log = console.log;
const path = require('path')

const PORT = 8080

//chunk2
//Data parsing
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.post('/email', (req, res) => {
    //TODO
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(PORT, () => {
    log('Server is running on port 8080')
});