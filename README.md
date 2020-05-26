# node-HandPose-OSC
*Fork of [lysdexic audio's ](https://github.com/lysdexic-audio/)[n4m-handpose](https://github.com/lysdexic-audio/n4m-handpose), but runs stand-alone and outputs OSC instead using Max*<br>

Wraps [MediaPipe Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) inside electron and serves the detected parts via OSC.

## Running the program
If you're not interested in modifying the code, you can just download the latest [release](https://github.com/faaip/node-HandPose-OSC/releases) (still only OSX, though)


# Steps
Make sure you have [node.js](https://nodejs.org/en/) installed. Additionally this has been developed using [yarn](https://yarnpkg.com/).

1. Install npm dependencies using `yarn install`. Since Electron's kind of big in size, this make take a while depending on your network environment.
2. Launch using `yarn start`
3. The node.script emits the detected results as a OSC. With each OSC address being a detected landmark.

## Building Electron App
First install all dependencies using `yarn install`.<br>
Then create the executable by running `yarn run dist`
