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
        
    }   // >,< if meron pa sunod

    
}

module.exports = controller;
