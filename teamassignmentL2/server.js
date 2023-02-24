const app = require('./app');
const http = require('http');
const port = 8080;

const server = http.createServer(app);

server.listen(port, (error) => {
    if(error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log(`Server running on port ${port}`);
    }
});