const express = require("express"); // Import the Express module
const app = express(); // Create a new instance of the app
const cors = require("cors"); // Import the CORS module

app.use(cors({origin:"*", optionsSuccessStatus: 200})); // Set up CORS middleware to allow cross-origin requests from any origin
app.use("/", require("./routes/index")); // Set up routing to use the index.js file in the routes folder for all requests to the root URL

module.exports = app; // Export the app object so it can be used in other modules
