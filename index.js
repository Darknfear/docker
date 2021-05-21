'use strict'

const express = require('express');
//const
//const host = '0.0.0.0';
const port = '3000';

//app
const app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`you are run server with port ${port}`);
})

