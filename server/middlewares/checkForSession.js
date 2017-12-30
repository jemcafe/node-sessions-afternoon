module.exports = ( req, res, next ) => {
    // Checks if req.session has a user object. If it doesn't it will create one.
    // This is the user's object during their session
    if ( !req.session.user ) {
        req.session.user = { username: '', cart: [], total: 0 }
    }
    // If it does, move on to the next middleware
    next();
}