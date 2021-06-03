const db = require('../models/db.js');
const Traveler = require('../models/TravelerModel.js');
const {render} = require('../routes/routes.js');

const controller = {

    getIndex: function(req, res) {
        res.render('home', {name:"Leana"});   //hbs
    },   // >,< if meron pa sunod

    getSignUp: function(req, res) {
        res.render('signup',{});
    },

    getLogin: function(req, res) {
        res.render('login',{});

    },

    getProfile: function(req, res) {
        let sess = req.session;
        res.render('profile',{name: sess.traveler.username});
    },

    postSignUp: function(req, res) {
        let username =  req.body.username;
        let password =  req.body.password;

        //to do

        let traveler = new Traveler({
            username: username,
            password: password
        })

        traveler.save();
        res.send(traveler);
    },

    postLogin: function(req, res) {
        const sess = req.session;
        let username = req.body.username;
        let password =  req.body.password;

        Traveler.findOne({username: username, password: password}, (err, result)=> {
            if(err) {
                console.log(err);
            }
            else {
                sess.traveler = result;
                res.send(result);
            }
        });
    }

}

module.exports = controller;
