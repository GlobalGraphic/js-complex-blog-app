const express = require('express');
const router = require('./router');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const app = express();


// ! session init + config options
let sessionOptions = session({
    secret: "hnilecanuska1965",
    store: new MongoStore({ client: require('./db') }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

// ! run this FN for every request
app.use((req, res, next) => {
    // * make all error and success flash messages available from all templates
    res.locals.errors = req.flash("errors");
    res.locals.success = req.flash("success");

    // * make current user id available on the req object
    if(req.session.user) { req.visitorId = req.session.user._id } else { req.visitorId = 0 }

    // * make user session data available from within view templates
    res.locals.user = req.session.user;
    next();
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// set public folder accessible
app.use(express.static('public'));

// set app to use ejs engine for templating
app.set('views', 'views');
app.set('view engine', 'ejs');

// router handler
app.use('/',router);

module.exports = app;