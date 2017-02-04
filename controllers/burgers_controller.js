var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


// Imports the model from burger.js 
var burger = require("../models/burger.js");

//Routing
// Creates all our routes below
// Grabs all burgers from the burgers database
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

//Posts a burger to db
router.post("/", function(req, res) {
    burger.create(req.body.burger_name,
        function() {
            res.redirect("/");
        });
});

////Updates a burger to db
router.put("/:id", function(req, res) {
    burger.updateDevoured(req.params.id, function() {
        res.redirect("/");
    });
});



module.exports = router;
