
var mysql = require('mysql');
var stat_conn;

 function conectar() {
  var connect_database = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'findbook'
  });
  connect_database.connect();
  return conectar; 
};
exports.conectar = conectar;
