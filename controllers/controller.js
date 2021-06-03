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
        res.render('home', {name:"Leana"});   //hbs
    },   // >,< if meron pa sunod

    getSignUp: function(req, res) {
        // add to routes and render sign u
        res.render('signup',{});


    },

    getLogIn: function(req, res) {
        // add to routes and render login
        res.render('login',{});

    },

}

module.exports = controller;
