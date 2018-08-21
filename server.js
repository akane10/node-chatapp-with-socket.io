const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 3000;
const server = app.listen(port, () => console.log(`port ${port} is ready listening for request`));

app.use(express.static('public'));

const io = socket(server);

io.on('connection', socket => {
	socket.on('chat', data => {
		console.log(data)
		io.emit('chat', data);
	});

	socket.on('typing', data => {
		socket.broadcast.emit('typing', data);
	});
});