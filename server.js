// links the node module 'express'
const express = require('express');

// links the node module 'express-handlebars'
const exphbs = require('express-handlebars');

// links the node module 'express-session'
const session = require('express-session');

// links the routes for api calls such as GET, POST, PUT, READ
const controllers = require('./controllers');

// initializes express
const app = express();
// sets a port for the server run on
const PORT = process.env.PORT || 3001;

// Initializes Sequelize with session store, necessary for cookies.
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// creates the session and defines its parameters
const sess = {
    secret: 'Sacrd Gardn',
    // cookies enable/disable
    // cookie: {
    //     // maxAge sets the maximum age for the session to be active. Listed in milliseconds.
    //     maxAge: 3600,
    //     // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
    //     httpOnly: true,
    //     // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
    //     secure: false,
    //     // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
    //     sameSite: 'strict',
    // },
    resave: false,
    // w/cookies change to true.
    saveUninitialized: false,
    // re-visit, believe stores cookie data.
    // store: new SequelizeStore({
    //     db: sequelize,
    // }),
};

// establishes the session
app.use(session(sess));

// creates the connection with handlebars
const hbs = exphbs.create({});

// reads the file connection.js, and imports it's functions
const sequelize = require('./configuration/connection');

// enable when using helpers.js file
// const helpers = require('./utilities/helpers');

// groups files in a directory to be easily read
const path = require('path/posix');

// enables the server to read .handlebars files
app.engine('handlebars', hbs.engine);
// defines the type of search engine to be read
app.set('view engine', 'handlebars');

// parses incoming information from a request
app.use(express.json());
// requests that contain key-value pairs can be read where values are strings or arrays 
app.use(express.urlencoded({ extended: false }));

// enables express to read static files in folder's views folder images
// ***renders images/functions on server
app.use(express.static(path.join(__dirname, 'public')))

// express connects to folder 'controllers' to read index.js for directions to server routes
app.use(controllers);

// This creates ruum_db if it doesn't exist and connects with it
sequelize.sync({ force: false }).then(() => 
    {
    // tells express to start listening on the server port
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
    }
);

// before using these files run the following commands in gitBash or CMD
// npm init --y
// npm i --save