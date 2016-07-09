var socket = io.connect();

var emailForm = $('#email-input');

socket.on('success', function(){
  responseMessage('THANKS');
});

socket.on('database error', function(){
  responseMessage('An error occured, please try again later.')
})

$('#send-button').click(function(){
  submitForm(emailForm);
});

emailForm.keypress(function(e){
  if(e.which == 13){
    submitForm(emailForm);
    return false;
  } else if(isValidEmail(emailForm.val())) {
    validForm(emailForm);
  } else {
    setBackgroundColor(emailForm, '#ffffff');
  }
});

var isValidEmail = function(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

var disableButtons = function(){
  emailForm.fadeOut();
  $('#send-button').fadeOut();
};

var responseMessage = function(message){
  $('#response').text(message);
  $('#response').fadeIn();
  $('#response').show();
};

var submitForm = function(form) {
  var input = form.val();
  if(isValidEmail(input)){
    socket.emit('userData',input);
    disableButtons();
  } else {
    invalidForm(form);
  }
};

var invalidForm = function(form) {
  setBackgroundColor(form, '#ffc8c8');
};

var validForm = function(form) {
  setBackgroundColor(form, '#aaffed');
};

var setBackgroundColor = function(item, color){
  item.css('background-color', color);
};
