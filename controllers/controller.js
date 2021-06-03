const db = require('../models/db.js');

const controller = {

    /**
     * getIndex.
     * 
     * renders the homepage.
     * @param {*} req 
     * @param {*} res 
     */
    getIndex: function(req, res) {
        res.render('index', {name:"Leana"});   //hbs
    },   // >,< if meron pa sunod

    getSignUp: function(req, res) {
        // add to routes and render sign up
    },

    getSignIn: function(req, res) {
        // add to routes and render login
    },

}

module.exports = controller;
