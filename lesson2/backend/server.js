const app = require("./app"); // Import the Express app
const http = require("http"); // Import the HTTP module
const port = 8080; // Set the port number for the server

const server = http.createServer(app); // Create a new HTTP server instance using the Express app

server.listen(port, (error) => {
    if (error) {
        console.log("Something went wrong", error); // Log an error message if the server fails to start
    }
    else {
        console.log(`Server running on port ${port}`); // Log a message indicating that the server is running
    }
});
