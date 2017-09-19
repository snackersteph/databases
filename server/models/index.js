var db = require('../db');

module.exports = {
  messages: {
    get: function (request, cb) {
      // query with SELECT string and function(err, results)
      db.query('select * from messages;', 
        function (err, results) {
          if (err) {
            console.log('Error getting messages');
          } else {
            cb(results);
          }
        });
    }, // a function which produces all the messages
    post: function (request, cb) {
      
      // Does the user exist?
      
      // If yes, retrieve preset user id
      // If not, set a new id

      // Repeat insert for roomnames table

      // Pass roomname id as request.roomname
      // Pass user id as request.username

      db.query('INSERT INTO messages (id, user, roomname, createdAt, messageText) VALUES (' + request.id + ', ' + request.username + ', ' + request.roomname + ', ' + request.text + ')', 
        function() {
          cb(response);
        });
    }

      // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (request, cb) {
      db.query('SELECT * FROM messages where messages.user = request.user',
        function(err, results) {
          if (err) {
            console.log('Error getting messages');
          } else {
            cb(results);
          }
        }      
      );
    },
    post: function () {}
  }
};

