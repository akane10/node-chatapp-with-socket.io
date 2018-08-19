const socket = io.connect('http://localhost:3000');

const message = document.getElementById('message');
const username = document.getElementById('username');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

btn.addEventListener('click', () => {
	socket.emit('chat', {
		message: message.value,
		username: username.value
	});
});

message.addEventListener('keypress', () => {
	socket.emit('typing', username.value);
});

socket.on('chat', data => {
	feedback.innerHTML = '';
	output.innerHTML += `
		<p><strong>${data.username} :</storng> ${data.message}</p>
	`
});

socket.on('typing', (data) => {
	feedback.innerHTML = `
		<p><em>${data} is typing.. </em></p>
	`
});