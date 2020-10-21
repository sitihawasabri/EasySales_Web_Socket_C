const io = require('socket.io-client');
const {
    cl_connect,
    handshakeKey
} = require('../Constants');
const {
    ev_handshake,
    ev_handshake_res
} = require('../Events');

const socketUrl = /* "wss://rocky-plateau-82399.herokuapp.com"; */ "http://localhost:3231";

const socket = io(socketUrl)

socket.on(cl_connect, ()=>{
    console.log("Socket Established");
    socket.emit(ev_handshake,`gseries`);

    socket.on(ev_handshake_res,(data)=>{
        console.warn('Handshake Res: ',data);
    });
});