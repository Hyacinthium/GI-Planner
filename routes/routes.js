const express = require(`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

// get functions
app.get(`/`, controller.getIndex);
app.get(`/signup`, controller.getSignUp);
app.get(`/login`, controller.getLogin);
app.get(`/profile`, controller.getProfile);
app.get(`/schedule`, controller.getSchedule);
app.post(`/postsignup`, controller.postSignUp);
app.post(`/postlogin`, controller.postLogin);
app.get(`/updateCharacter`, controller.getUpdateCharacter);
app.get(`/updateVision`, controller.getUpdateVision);
app.get(`/updateWeapon`, controller.getUpdateWeapon);
app.get(`/updateFlower`, controller.getUpdateFlower);
app.get(`/updatePlume`, controller.getUpdatePlume);
app.get(`/updateSands`, controller.getUpdateSands);
app.get(`/updateGoblet`, controller.getUpdateGoblet);
app.get(`/updateCirclet`, controller.getUpdateCirclet);
app.get(`/logout`, controller.getLogOut);
// post functions

module.exports = app;
