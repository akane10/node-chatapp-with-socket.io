const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 3000;
const server = app.listen(port, () => console.log(`port ${port} is ready listening for request`));

app.use(express.static('public'));

const io = socket(server);

io.on('connection', socket => {
	console.log('connect', socket.id)
	socket.on('chat', (data) => {
		io.sockets.emit('chat', data);
	});
});