var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      // query with SELECT string and function(err, results)
      var queryString = 'select messages.id, users.username, messages.text, rooms.roomname from messages m left outer join users u on (m.userid = u.id) left outer join rooms r on (m.roomid = r.id) order by m.id desc;';
      db.query(queryString, 
        function (err, results) {
          if (err) {
            console.log('Error getting messages', err);
          } else {
            cb(err, results);
          }
        });
    }, // a function which produces all the messages
    post: function (params, cb) {
      // [req.body[username], req.body[message], req.body[roomname]]
      console.log(params[0]);
      db.query('insert into users (username) select "' + params[0] + '" from dual where not exists (select * from users where username = "' + params[0] + '");', function(err, results) {
        if (err) {
          console.log('error adding user', err);
        } else {
          // add room to rooms table
          db.query('insert into users (username) select "' + params[2] + '" from dual where not exists (select * from users where username = "' + params[2] + '");', function(err, results) { 
            if (err) {
              console.log('error adding room', err);
            } else {
              var queryString = 'insert into messages (userid, text, roomid) values((select id from users where username = "' + params[0] + '"), "' + params[1] + '" , (select id from rooms where roomname = "' + params[2] + '"));';

              db.query(queryString, params, 
                function(err, results) {
                  if (err) {
                    console.log('Error posting messages', err);
                  } else {
                    cb(err, results);
                  }
                });
                
            }
            
          });
        }
      
      });
            
            
      
    }

      // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString,
        function(err, results) {
          if (err) {
            console.log('Error getting messages');
          } else {
            cb(err, results);
          }
        }      
      );
    },
    post: function (params, cb) {
      var queryString = 'INSERT INTO users (username) values (?)';
      db.query(queryString, params, function(err, results) {
        if (err) {
          console.log('Error posting users');
        } else {
          cb(err, results);
        }
      });
    }
  },
  
  rooms: {
    // Ditto as above.
    get: function (cb) {
      var queryString = 'SELECT * FROM rooms';
      db.query( queryString,
        function(err, results) {
          if (err) {
            console.log('Error getting room');
          } else {
            cb(err, results);
          }
        }      
      );
    },
    post: function (params, cb) {
      var queryString = 'INSERT INTO rooms (roomname) values (?)';
      db.query(queryString, params, function(err, results) {
        if (err) {
          console.log('Error posting room');
        } else {
          cb(err, results);
        }
      });
    }
  }
};

