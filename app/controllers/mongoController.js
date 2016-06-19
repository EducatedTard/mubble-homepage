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

var User = mongoose.model('User', UserSchema);

var pushData = function(email){
  var data = new User({
    email: email
  });
  data.save(function(err, data){
    if(err) {
      return console.error(err);
    } else {
      console.log('saved :' + data);
    }
  });
};

module.exports.pushData = pushData;
