var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/config');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

mongoose.connect(config.db, config.options);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/client/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
