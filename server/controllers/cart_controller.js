const swag = require('../models/swag');

module.exports = {
    add: (req, res, next) => {
        req.body.id
        res.status(200).send(session.user)
    },   
    remove: (req, res, next) => {
        req.body.id
        res.status(200).send(session.user)
    },   
    checkout: (req, res, next) => {
        res.status(200).send(session.user)
    },   
}