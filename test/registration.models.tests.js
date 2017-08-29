//require assert
const assert = require('assert');
const modules = require('../modules');

//connect to MongoDB
var registrations = modules('mongodb://127.0.0.1/reg_numbers');

describe('store registration numbers', function() {
   //before it fuction run clear the Database
    beforeEach(function(done) {
        registrations.find({}, function(err) {
            registrations.remove({}, function(err) {
                done(err);
            });
        });
    });

    it('should add new registration number to MongoDB', function(done) {
        //new registration number
        var newReg = {registration_number: 'CA 598 698'};

            registrations.create(newReg, function(err) {
                registrations.find({}, function(err, results){
                    assert.equal(1, results.length);
                  done(err);
                });
            });
    });
});
