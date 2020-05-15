const express = require('express');

const app = express();
const log = console.log;

const PORT = 8080



app.listen(PORT, () => {
    log('Server is running on port 8080')
});