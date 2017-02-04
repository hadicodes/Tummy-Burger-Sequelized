//Dependncies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

//app to define the express instance
var app = express();

// The app's static files will be served from the "public" directory.
app.use(express.static(process.cwd() + "/public"));
//Parse the urlencoded data to be easier to read
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Select handlebars as a Templating Engine option and then Set Handlebars to be used.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes from burgers-controller.js to be used here in server.js
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
