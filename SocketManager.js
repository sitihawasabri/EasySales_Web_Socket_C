const io = require('./index.js').io;
const _ = require('lodash');
const {
    ev_handshake,
    ev_handshake_res
} = require('./Events');
const {
    handshakeKey,
    yes,
    no,
    not_exists
} = require('./Constants');
const db = require('./MySQL');
const uuidv4 = require('uuid/v4');

module.exports = function(socket){
    var { id } = socket;
    socket.on(ev_handshake,(data)=>{
        console.log('From client: ',data);
    });
    socket.on('*',(data)=>{
        console.log('--From client: ',data);
    });
    console.log("Socket Id: " + id);
}