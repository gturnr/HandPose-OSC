const io = require("socket.io")();
const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 8008);
const electron = require("electron");
const proc = require("child_process");
const child = proc.spawn(electron, ["."]);

io.on("connection", (socket) => {
	console.log("Socket is connected with Electron App");
	socket.on("dispatch", (data) => {
		// console.log("dispatch: ", data);
		for (let i = 0; i < data.landmarks.length; i++) {
			client.send('/' + i, data.landmarks[i], () => {
			});
		}
	});

	socket.on("oscPortSet", (port) => {
		client.port = port;
		console.log('OSC port set to', client.port);
	});
});

io.listen(3000);

process.on("exit", () => {
	client.close();
	child.kill();
});
