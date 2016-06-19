var express = require('express');
var mongoose = require('mongoose');
var config = require(__dirname + '/config/config');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


mongoose.connect(config.db, config.options);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/client/index.html');
});

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
