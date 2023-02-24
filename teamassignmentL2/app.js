const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({origin:'*', optionsSuccessStatus: 200}));
app.use('/', require('./routes/index'));


module.exports = app;