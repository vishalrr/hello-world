'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'); // "express-handlebars"

var app = express();
 var handlebars;

// Create `ExpressHandlebars` instance with a default layout.
handlebars = exphbs.create({
    defaultLayout: 'main',
    extname      : '.html', //set extension to .html so handlebars knows what to look for

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'views/shared/',
        'views/partials/'
    ]
});
app.engine('html', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('home', {title:"My Site"});
});
app.get('/town', function (req, res) {
    res.render('town', { town: "Lee Vining",title:"hello guys"});
});
app.get('/june', function (req, res) {
    res.render('june', {title:"hellys"});
});
app.get('/bodie', function (req, res) {
    res.render('bodie');
});
app.use(express.static('public'))
app.listen(8080, function () {
    console.log('express-handlebars example server listening on: 8080');
});
module.exports = app;
