const express = require('express')
const app= express()
const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./configure/db.js");
const cors = require('cors');
const bodyparser = require("body-parser");
const path = require('path')



mongoose.set("strictQuery", true);
app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(cors());

connection();

const conn = mongoose.connection;










const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));


    
