const users = require('../models/users');  // Where the users are stored
let id = 1;                                // An id for the users

module.exports = {
    login: ( req, res, next ) => {
        const { username, password } = req.body;

        const user = users.find( user => (user.username === username && user.password === password) );

        if ( user ) {
            req.session.user.username = username;     // The username for the session is the user's username
            res.status(200).send( req.session.user ); // Sends the session's user object
        } else {
            res.status(500).send( 'Unauthorized' );
        }
    },
    register: ( req, res, next ) => {
        const { username, password } = req.body;  // The username and password sent from the client

        users.push({ id, username, password });   // A new user is added to the users array
        id++;

        req.session.user.username = username;     // The username for the session is the new user's username

        res.status(200).send( req.session.user )  // Sends the session's user object
    },
    signout: ( req, res, next ) => {
        req.session.destroy();                    // Ends the session
        res.status(200).send( req.session );      // Sends an undefined session
    },
    getUser: ( req, res, next ) => {
        res.status(200).send( req.session.user ); // Reads the reqested user object
    }
}