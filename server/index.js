const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

// Middleware
const checkForSession = require('./middlewares/checkForSession');
const swagController = require('./controllers/swag_controller');
const cartController = require('./controllers/cart_controller');

// Controllers
const authController = require('./controllers/auth_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use( checkForSession );

// Swag - list of products that can be put in the users cart
app.get('/api/swag', swagController.read);

// Auth
app.post('/api/login', authController.login);
app.post('/api/register', authController.register);
app.post('/api/signout', authController.signout);
app.get('/api/user', authController.getUser);

// Cart
app.post('/api/cart', cartController.add);
app.post('/api/cart/checkout', cartController.checkout);
app.delete('/api/cart', cartController.remove);


const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Listening on port: ${port}`) } );