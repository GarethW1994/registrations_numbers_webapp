'use strict';

//Require external modals
var express = require('express');
var expressHandlebars = require('express-handlebars');
var assert = require('assert');

//declare PORT var 3000
var port = process.env.PORT || 3000;

//Initialise Instance of express
var app = express();

//Stacic Files
app.use(express.static('public'));

//init Handlebars
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//init body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Home Route
app.get('/', function(req, res) {
	res.render('home');
});



app.post('/reg_numbers', function(req, res, next) {
	var reg_number = req.body.regNum;
	
	
});

app.listen(port, function() {
   console.log('server running at localhost//:'+ port + '/'); 
});