const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();
const app = express();
// if there is a port in an environment variable like render will have then we use that port otherwise use 3000
const port = process.env.PORT || 3000;
//this calls the module from the index.js file in routes folder. the / means home 
app.use("/", require("./routes"));
// mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster4676.fmaamyi.mongodb.net/test`, (err) => {
//     if (err) throw err;
//     console.log("DB Connected Successfully");
// });
// const PORT = 4000;
// app.listen(PORT, () => {
//     console.log(`Server Running on port ${PORT}`);
// });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});