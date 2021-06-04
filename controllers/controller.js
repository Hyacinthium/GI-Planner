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

    getSchedule: function(req,res) {
        res.render('schedule',{});
    },

    getLogOut: function(req,res) {
        req.session.destroy();
        res.render('home');
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

        Traveler.findOneAndUpdate({username: sess.traveler.username}, {character: character}, function(err, succ){
            if (err)
                console.log(err);
        });
    },

    getUpdateWeapon: function(req, res) {
        let sess = req.session;
        weapon = req.query.weapon;

        sess.traveler.weapon = weapon;
        sess.save();

        Traveler.findOneAndUpdate({username: sess.traveler.username},{weapon: weapon}, function(err, succ){
            if (err)
                console.log(err);
        });
    },

    getUpdateVision: function(req, res) {
        let sess = req.session;
        vision = req.query.vision;

        sess.traveler.vision = vision;
        sess.save();

        Traveler.findOneAndUpdate({username: sess.traveler.username},{vision: vision}, function(err, succ){
            if (err)
                console.log(err);
        });
    },

    getUpdateFlower: function(req, res) {
        let sess = req.session;
        flower = req.query.flower;

        sess.traveler.flower = flower;
        sess.save();

        Traveler.findOneAndUpdate({username: sess.traveler.username},{flower: flower}, function(err, succ){
            if (err)
                console.log(err);
        });
    },

    getUpdatePlume: function(req, res) {
        let sess = req.session;
        plume = req.query.plume;

        sess.traveler.plume = plume;
        sess.save();

        Traveler.findOneAndUpdate({username: sess.traveler.username},{plume: plume}, function(err, succ){
            if (err)
                console.log(err);
        });
    },

    getUpdateSands: function(req, res) {
        let sess = req.session;
        sands = req.query.sands;

        sess.traveler.sands = sands;
        sess.save();

        Traveler.findOneAndUpdate({username: sess.traveler.username},{sands: sands}, function(err, succ){
            if (err)
                console.log(err);
        });
    },

    getUpdateGoblet: function(req, res) {
        let sess = req.session;
        goblet = req.query.goblet;

        sess.traveler.goblet = goblet;
        sess.save();

        Traveler.findOneAndUpdate({username: sess.traveler.username},{goblet: goblet}, function(err, succ){
            if (err)
                console.log(err);
        });
    },

    getUpdateCirclet: function(req, res) {
        let sess = req.session;
        circlet = req.query.circlet;

        sess.traveler.circlet = circlet;
        sess.save();

        Traveler.findOneAndUpdate({username: sess.traveler.username},{circlet: circlet}, function(err, succ){
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
