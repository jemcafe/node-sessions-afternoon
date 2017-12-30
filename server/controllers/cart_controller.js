const swag = require('../models/swag');

module.exports = {
    add: ( req, res, next ) => {
        const { id } = req.query;
        const { cart, total } = req.session.user;

        const index = cart.findIndex( e => e.id == id );

        if ( index === -1 ) {
            const item = swag.find( e => e.id == id );

            cart.push( item );
            total += item.price;
        }
        
        res.status(200).send( user );
    },   
    remove: ( req, res, next ) => {
        const { id } = req.query;
        const { cart, total } = req.session.user;
        
        const item = swag.find( e => e.id == id );

        if ( item ) {
          const index = cart.findIndex( swag => swag.id == id );
          cart.splice(index, 1);
          total -= item.price;
        }
        
        res.status(200).send( req.session.user );
    },   
    checkout: ( req, res, next ) => {
        req.session.cart = [];
        req.session.total = 0;

        res.status(200).send( req.session.user );
    },   
}