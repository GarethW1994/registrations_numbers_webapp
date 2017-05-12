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

//reguire mongoose

var mongoose = require('mongoose');


//declare url to mongodb
const mongoURL = process.env.MONGO_DB_URL || "mongodb://GarethW:$ninja123!@ds137101.mlab.com:37101/reg_numbers";

//connect to mongodb
mongoose.connect(mongoURL);

//Create mongoose Schema
var registrationSchema = new mongoose.Schema({
	registration_number: {
		type: String,
		require: true
	}
});

//declare the unique value 
registrationSchema.index({registration_number: 1}, {unique: true});

//Create mongoose model
var registrations = mongoose.model('registrations', registrationSchema);


////////////////external modules////////////////
//var addData = require('./public/javascript/add_reg_num');

var regNumData = [];

//Home Route
app.get('/', function(req, res) {
registrations.find({}, function(err, data) {
	
	if (err) return err;	
		
	res.render('home', {data: data});	
	});
});


app.get('/reg_numbers', function(req, res){
	registrations.find({}, function(err, data) {
	
	if (err) return err;	
		
	res.render('home', {data: data});	
	});
});

app.post('/reg_numbers', function(req, res, next) {
	var reg_number = req.body.regNum;
	
	registrations({
		registration_number: reg_number
	}).save(function(err, result) {
		if (err) return err;

		console.log(result);
	});
	
	res.redirect('/reg_numbers');
});

app.listen(port, function() {
   console.log('server running at localhost//:'+ port + '/'); 
});