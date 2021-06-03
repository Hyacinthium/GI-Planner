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
        res.render('profile',{  name: sess.traveler.username, character: sess.traveler.character,
                                vision: sess.traveler.vision, weapon: sess.traveler.weapon,
                                flower: sess.traveler.flower, plume: sess.traveler.plume,
                                sands: sess.traveler.sands, goblet: sess.traveler.goblet,
                                circlet: sess.traveler.circlet });
    },

    getUpdateCharacter: function(req, res) {
        let sess = req.session;
        character = req.query.character;

        sess.traveler.character = character;
        sess.save();

        profile = new Profile({
            about: about,
            bio: sess.okami.profile.bio,
            followers: sess.okami.profile.followers,
            games: sess.okami.profile.games
        })

        Traveler.findOneAndUpdate({username: sess.traveler.username}, function(err, succ){
            if (err)
                console.log(err);
        });
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
