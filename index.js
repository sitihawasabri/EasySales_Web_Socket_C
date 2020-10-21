const express = require('express');
const app = express();
const PORT = process.env.PORT || 3231;
const server = app.use((req, res) => res.sendFile('index.html', { root: __dirname })).listen(PORT, ()=>{
	console.log("Connected to port: " + PORT);
});
const io = module.exports.io = require('socket.io').listen(server);
const SocketManager = require('./SocketManager');
const {
    sv_connect
} = require('./Constants');

io.set('heartbeat timeout', 4000); 
io.set('heartbeat interval', 2000);
io.on(sv_connect, SocketManager);
