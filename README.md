# node-HandPose-OSC
*Fork of [lysdexic audio's ](https://github.com/lysdexic-audio/)[n4m-handpose](https://github.com/lysdexic-audio/n4m-handpose), but runs stand-alone and outputs OSC instead using Max*<br>

Wraps [MediaPipe Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) inside electron and serves the detected parts via OSC.


# Steps
1. Install npm dependencies using `npm install`. Since Electron's kind of big in size, this make take a while depending on your network environment.
2. Launch using `node index.js`
3. The node.script emits the detected results as a OSC. With each OSC address being a detected landmark.
