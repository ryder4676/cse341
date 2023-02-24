const express = require("express");
const router = express.Router();

router.get('/professional', require('../controller'));

module.exports = router;