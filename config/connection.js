//dependecies
var mysql = require('mysql');
// connecting to mySQL
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'nothing',
  database : 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.log(" error " + err.stack);
    return;
  }
  console.log("connect as id" + connection.threadId);
})

module.exports = connection;
