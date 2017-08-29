//require mongoose
var mongoose = require('mongoose');

module.exports = function(url) {
  //connect to mongodb
  mongoose.connect(url);

  const registrationSchema = new mongoose.Schema({
  	registration_number: {
  		type: String,
  		require: true
  	}
  });

  //declare the unique value
  registrationSchema.index({registration_number: 1}, {unique: true});

  //Create mongoose model
  var registrations = mongoose.model('registrations', registrationSchema);

  return registrations;
}
