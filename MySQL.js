const mysql = require('mysql');

var con = mysql.createConnection({
    host: "easysales.asia",
    user: "easysale_zack",
    password: "zack123@",
    database: "easysale_selforder",
    port:3306
});
con.connect(function(err) {
    if(err){
        console.error('MySQL error --> ',err.message);
    }
});
const reconnect = () =>{
    while(con.state == 'disconnected'){
        con.connect();
    }
}
const checkIfClientExists = (client, callback) =>{
    reconnect();

    var _query = "SELECT * FROM api_login_admin WHERE client_company = '"+client+"'";
    con.query(_query,(error, result, fields)=>{
        callback(result && result.length > 0);
    });
}
const insertLastAccess = ({ client, uuid }) =>{
    reconnect();

    var _query = `INSERT INTO api_bridge_auth (uid, client_company, last_accessed) VALUES (${con.escape(uuid)},${con.escape(client)},NOW()) ON DUPLICATE KEY UPDATE last_accessed = VALUES(last_accessed)`;
    
    con.query(_query);
}
module.exports = {
    checkIfClientExists,
    insertLastAccess
}