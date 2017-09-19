var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
  user: 'root',
  database: 'chat',
  password: 'plantlife'
});

dbConnection.connect(function(err) {
  if (err) {
    console.log('Error reaching database', err);
  } else {
    console.log('Connected to mySQL');
  }
});

module.exports = dbConnection;