var socket = io.connect();

$('#send-button').click(function(){
  var input = $('#email-input').val();
  if(isValidEmail(input)){
    socket.emit('userData',input);
  }
});

var isValidEmail = function(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
