const swag = require('../models/swag');

module.exports = {
    add: ( req, res, next ) => {
        const { id } = req.query;

        const index = req.session.user.cart.findIndex( swag => swag.id == id );

        if ( index === -1 ) {
            const item = swag.find(swag => swag.id == id );
            
            req.session.user.cart.push( item );
            req.session.user.total += item.price;
        }
        
        res.status(200).send( req.session.user );
    },   
    remove: ( req, res, next ) => {
        const { id } = req.query;
        
        const item = swag.find( e => e.id == id );

        if ( item ) {
          const index = req.session.user.cart.findIndex( swag => swag.id == id );
          req.session.user.cart.splice(index, 1);
          req.session.user.total -= item.price;
        }
        
        res.status(200).send( req.session.user );
    },   
    checkout: ( req, res, next ) => {
        req.session.user.cart = [];
        req.session.user.total = 0;

        res.status(200).send( req.session.user );
    },   
}