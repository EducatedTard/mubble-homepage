var socket = io.connect();

$('#response').fadeOut();

socket.on('success', function(){
  responseMessage('THANKS');
});

socket.on('database error', function(){
  responseMessage('An error occured, please try again later.')
})

$('#send-button').click(function(){
  var input = $('#email-input').val();
  if(isValidEmail(input)){
    socket.emit('userData',input);
    disableButtons();
  }
});

var isValidEmail = function(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

var disableButtons = function(){
  $('#email-input').fadeOut();
  $('#send-button').fadeOut();
};

var responseMessage = function(message){
  $('#response').text(message);
  $('#response').fadeIn();
  $('#response').show(); 
};
