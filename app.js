const dotenv = require(`dotenv`);  //envi variable , 
const express = require(`express`);  //server, app, run the server, listen, connect to routes
const hbs = require(`hbs`);   //handlebars
const bodyParser = require(`body-parser`);   //parse body, express, req.body
const session = require('express-session');  //session management, req.session,
const routes = require(`./routes/routes.js`);  
const db = require(`./models/db.js`);         
const MongoStore = require('connect-mongo');  //indiv client session
const app = express();                          //initialize express

app.use(bodyParser.urlencoded({ extended: false }));

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);  

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;
url = process.env.DB_URL; //uri
secret = process.env.SECRET;

app.use(express.static(`public`));

db.connect();

app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: secret,
	store: MongoStore.create({
		mongoUrl: url
	})
}));

app.use(`/`, routes);

app.listen(port, hostname, function () {
    console.log(`Server is running at:`);
    console.log(`http://` + hostname + `:` + port);
});
