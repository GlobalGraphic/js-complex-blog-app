const express = require('express');
const app = express();
const router = require('./router');

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