var name = getQueryParameters('name') || 'Anonymous';
var room = getQueryParameters('room');
var socket = io();
console.log(name+' wants to join '+room);
socket.on('connect',function () {
  console.log('connected to socket io');
  socket.emit('joinRoom',{
    name: name,
    room: room
  });
});

socket.on('message',function (data) {
  var momentTimeStamp = moment.utc(data.timestamp);
  var $print = jQuery('.messages');
  console.log("Message :");
  console.log(data.text);
  $(".room-name").text(room);
  //console.log(momentTimeStamp);
  $print.append('<p><strong>'+data.name+'  '+momentTimeStamp.local().format("h:mm a")+'</strong></p>')
  $print.append('<p>'+data.text+'</p>');
});

//handles new message
var $form = jQuery('#message-form');
$form.on('submit',function (event) {
  event.preventDefault();
  socket.emit('message',{
    name: name,
    text:$form.find('input[name=message]').val()
  });
  console.log($form.find('input[name=message]').val());
  $form.find('input[name=message]').val('');
});
