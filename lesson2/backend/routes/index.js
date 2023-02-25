const express = require("express"); // Import the Express module
const router = express.Router(); // Create a new router instance

router.get("/professional", require("../controller")); // Set up a GET route at /professional that uses the controller module

module.exports = router; // Export the router instance so it can be used in other modules
