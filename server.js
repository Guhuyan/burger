// Dependency
const express = require("express");
const exphbs = require("express-handlebars");

// Creating an express server with the app variable
const app = express();

// Setting up a dynamic port
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Router
const routes = require("./controllers/burgers_controller");

app.use(routes);

// Telling the app to listen for requests
app.listen(PORT, function () {
    console.log("App is now listening on PORT: " + PORT);
});