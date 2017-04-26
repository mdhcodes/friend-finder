// App Dependencies
// Server framework (everything needed to build a web application) for Node.js.
var express = require('express');
// Node.js module to parse or analyze data.
var bodyParser = require('body-parser');
// Node.js module for working with files and directory paths.
var path = require('path');


// Create an express server.
var app = express();


// Establish a port.
// The PORT will be defined by the deployment site or set to localhost:3000.
var PORT = process.env.PORT || 3000;


// BodyParser makes it possible for the server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// Routes give the server a "map" of how to respond when users visit or request data from various URLs.

// Require html routes and pass the app (express server) as an argument to the returned function and immediately invoke it.
require("./app/routing/htmlRoutes")(app);

// Require api routes and pass the app (express server) as an argument to the returned function and immediately invoke it.
require("./app/routing/apiRoutes")(app);


// Start the server to listen for connections.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
