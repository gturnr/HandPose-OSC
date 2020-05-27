const io = require("socket.io")();
const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 8008);

io.on("connection", (socket) => {
	console.log("Socket is connected with Electron App");
	socket.on("dispatch", (data) => {
		if (data.oscFormatting.handInViewConfidence) {
			client.send("/handInViewConfidence", data.predictions.handInViewConfidence)
		}
		if (data.oscFormatting.boundingBox) {
			client.send("/boundingBox/topLeft", data.predictions.boundingBox.topLeft)
			client.send("/boundingBox/bottomRight", data.predictions.boundingBox.bottomRight)
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