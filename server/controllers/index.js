var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { console.log('error'); }
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      var params = [ req.body['username'], req.body['text'], req.body['roomname'] ];
      models.messages.post(params, function(err, results) {
        if (err) { console.log('error'); }
        res.json(results);
      });
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.log(err); }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [ req.body['username'] ];
      models.users.post(params, function(err, results) {
        if (err) { console.log('error'); }
        res.json(results);
      });
    }
  },
  
  rooms: {
    // Ditto as above
    get: function (req, res) {
      models.rooms.get(function(err, results) {
        if (err) { console.log(err); }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [ req.body[roomname] ];
      models.rooms.post(params, function(err, results) {
        if (err) { console.log('error'); }
        res.json(results);
      });
    }
  }
};

