# n4m-handpose-osc
*Fork of [n4m-handpose](https://github.com/lysdexic-audio/n4m-handpose), but runs stand-alone and outputs OSC instead using Max*<br>

Wraps [MediaPipe Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) inside electron and serves the detected parts via OSC.

Based around [Yuichi Yogo](https://github.com/yuichkun)'s great work porting Electron + Tensorflow models into [Node For Max](https://github.com/Cycling74/n4m-examples)


# Steps
1. Install npm dependencies by clicking the indicated button. Since Electron's kind of big in size, this make take a while depending on your network environment. When the message object says it's 'completed' you'll never have to do this step again.
2. Launch using `node index.js`
3. The node.script emits the detected results as a OSC. With each OSC address being a detected landmark.
