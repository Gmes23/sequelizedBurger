var mysql = require('mysql');
var connection;

if(process.env.JAWS_URL){
  connection = mysql.createConnection(process.env.JAWS_URL);
} else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'nothing',
    database : 'burgers_db'
  });

};


connection.connect(function(err) {
  if (err) {
    console.log(" error " + err.stack);
    return;
  }
  console.log("connect as id" + connection.threadId);
});

module.exports = connection;
