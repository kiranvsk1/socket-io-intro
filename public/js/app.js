var socket = io();

socket.on('connect',function () {
  console.log('connected to socket io');
});

socket.on('message',function (data) {
  console.log("Message :");
  console.log(data.text);
  jQuery('.messages').append('<p>'+data.text +'</p>');
});


//handles new message
var $form = jQuery('#message-form');
$form.on('submit',function (event) {
  event.preventDefault();
  socket.emit('message',{
    text:$form.find('input[name=message]').val()
  });
  $form.find('input[name=message]').val('');
});
