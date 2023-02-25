const routes = require("express").Router();
const myController = require("../controllers")
// this is by deafult home directory returns aewsome person
routes.get("/", myController.awesomeFunction);
// unlike this if you add /awesome to the GET request then it returns /awesome - returnAnotherPerson
routes.get("/awesome", myController.returnAnotherPerson);

module.exports = routes;