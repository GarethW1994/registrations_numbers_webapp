//require assert
const assert = require('assert');
const modules = require('../modules');
const mongoose = require('mongoose');
//connect to MongoDB
mongoose.connect('mongodb://localhost/reg_numbers');
var registrations = modules();

describe('store waiters', function() {
   //before it fuction run clear the Database
    beforeEach(function(done) {
        registrations.find({}, function(err) {
            registrations.remove({}, function(err) {
                done(err);
            });
        });
    });

    it('should add new waiter to MongoDB', function(done) {
        var newReg = {registration_number: 'CA 598 698'};
            registrations.create(newReg, function(err) {
                registrations.find({}, function(err, results){
                    assert.equal(1, results.length);
                  done(err);
                });
            });
    });
});
