const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
}));

const port = process.env.PORT;
app.listen(port, () => { console.log(`Listening on port: ${port}`) } );