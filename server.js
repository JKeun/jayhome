var express = require('express');
var app = express();

// packages
var path = require('path');
var pug = require('pug');

// routers
var homeRouter = require("./routes/home");

// set view engine to "pug"
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.use("/", homeRouter);


app.listen(process.env.PORT || 3030, function() {
    console.log("Server is running");
});
