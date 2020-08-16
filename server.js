// import all of the node modules we installed and need to run this app
const express = require("express");
const path = require("path");
const notes = require("./db/db.json");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");



// create an express application
const app = express();
const PORT = process.env.PORT || 3001;

// load all of the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(apiRoutes);
app.use(htmlRoutes);


// start the application
app.listen(PORT, function () {
  console.log("Now listening on PORT: ", PORT);
});
