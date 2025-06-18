const socket = io();

const input = document.getElementById('messageInput');
const messages = document.getElementById('messages');

function sendMessage() {
  const msg = input.value;
  if (msg.trim()) {
    socket.emit('chat message', msg);
    input.value = '';
  }
}

socket.on('chat message', function(msg){
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
});