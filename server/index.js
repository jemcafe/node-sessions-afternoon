const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const checkForSession = require('./middlewares/checkForSession');
const swagController = require('./controllers/swag_controller');

const app = express();


app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use( checkForSession );

app.get('/api/swag', swagController.read);

const port = process.env.PORT;
app.listen( port, () => { console.log(`Listening on port: ${port}`) } );