const io = require("socket.io")();
const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 8008);

io.on("connection", (socket) => {
	console.log("Socket is connected with Electron App");
	socket.on("dispatch", (data) => {
		console.log("dispatch: ", data.oscFormatting);
		if (data.oscFormatting.confidence) {

		}
		if (data.oscFormatting.boundingBox) {

		}
		if (data.oscFormatting.landmarks) {

		}
		if (data.oscFormatting.annotations) {

		}
		// for (let i = 0; i < data.landmarks.length; i++) {
		// 	client.send('/' + i, data.landmarks[i], () => {
		// 	});
		// }
	});

	socket.on("oscPortSet", (port) => {
		client.port = port;
		console.log('OSC port set to', client.port);
	});
});

io.listen(3000);