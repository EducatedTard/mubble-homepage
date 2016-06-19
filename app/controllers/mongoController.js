var mongoose = require('mongoose');
var config = require(__dirname + '/../../config/config');

mongoose.connect(config.db, config.options);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var UserSchema = mongoose.Schema({
    email: String
});

var isValidEmail = function(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var User = mongoose.model('User', UserSchema);

var pushData = function(email, callback){
  if(isValidEmail(email)){
    var data = new User({
      email: email
    });
    data.save(function(err, data){
      console.log('saved :' + data);
      callback(err);
    });
  } else {
    callback('invalid email');
  }
};

module.exports.pushData = pushData;
