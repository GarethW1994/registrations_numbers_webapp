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

//require mongoose
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

////////////////get data////////////////
//var getData = require('./public/javascript/mongo-data');


//global variable for storing current selected town
var selected_town = "";
var filteredRegs = [];

//Home Route
app.get('/', function(req, res) {
registrations.find({}, function(err, data) {
	
	if (err) return err;	
		
	res.render('home', {data: data, amount: data.length});	
	});
	
});


app.get('/reg_numbers/:reg', function(req, res){
	var reg_number = req.params.reg;
	var town = req.params.city;

	registrations({
		registration_number: reg_number
	}).save(function(err, result) {
		if (err) return err;

		console.log(result);
		
		//msg = "successfully added registration number";
		res.redirect('/');
	});
});

app.get('/filter', function(req, res) {
	var town = req.query.town
	
	if (town === 'All') {
		res.redirect('/');
	} else {
		
	registrations.find({registration_number: {$regex : town}}, function(err, data) {
		if (err) return err;
		
		//console.log(data);
		res.render('home', {data: data, amount: data.length});	
	});
	}
});


app.post('/reg_numbers', function(req, res, next) {
	var reg_number = req.body.regNum;
	selected_town = req.body.town;
	
	if (reg_number !== "") {	
		res.redirect('/reg_numbers/'+ reg_number);	
	} else {
		res.redirect('/');
	}
});

app.listen(port, function() {
   console.log('server running at localhost//:'+ port + '/'); 
});