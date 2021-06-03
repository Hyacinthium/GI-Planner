const express = require(`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

// get functions
app.get(`/`, controller.getIndex);
app.get(`/signup`, controller.getSignUp);
app.get(`/login`, controller.getLogin);
app.get(`/profile`, controller.getProfile);
app.post(`/postsignup`, controller.postSignUp);
app.post(`/postlogin`, controller.postLogin);


// post functions

module.exports = app;
