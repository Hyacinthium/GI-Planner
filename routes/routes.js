const express = require(`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

// get functions
app.get(`/`, controller.getIndex);
app.get(`/signup`, controller.getSignUp);
app.get(`/login`, controller.getLogIn);

// post functions

module.exports = app;
