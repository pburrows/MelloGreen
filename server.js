// Include Server Dependencies
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";

import routes from "./server/controllers";
import DatabaseSeeder from "./server/seed-data/seed";

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/SodaApp");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    let seeder = new DatabaseSeeder();
    seeder.runSeed();
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------

app.use("/api", routes);

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

export default app;