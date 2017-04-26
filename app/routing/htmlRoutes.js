// Node.js module for working with files and directory paths.
var path = require('path');

module.exports = function(app) {
  //Routes the HTTP GET requests to the specified path with the specified callback function.
  app.get('/', function(req, res) {
    // Send the user a file named /home.html
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

  app.get('/survey', function(req, res) {
    // Send the user a file named /survey.html
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
};