const router = require('./routes.js')
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = 5050;
mongoose.connect("mongodb+srv://GodTheDad:OeipLJxDrsJkTCF9@cluster0.wyoj7gz.mongodb.net/Members?retryWrites=true&w=majority")

.then(() => {
    const app = express();
   
    app.use(cors())
    app.use(express.json());
    app.use('/', router); 

    app.listen(port, () => {
        console.log(`Server is lit at ${port}`)
    });

});