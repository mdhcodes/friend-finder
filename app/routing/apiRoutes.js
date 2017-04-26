// Load data
// Require data sources for the routes.
var friendsData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    // Display data in json format.
    res.json(friendsData);
  });

  app.post('/survey', function(req, res) {
    var newUser = req.body;
    //friendsData.push(newUser);
    console.log(newUser);
  });
};