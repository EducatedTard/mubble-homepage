var express = require('express');

var config = require(__dirname + '/config/config');
var mongoController = require(__dirname + '/app/controllers/mongoController.js');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('userData', function (data) {
    mongoController.pushData(data,  function(error){
      if(error){
        socket.emit('database error');
      } else {
        socket.emit('success');
      }
    });
  });
});


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/client/index.html');
});

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
