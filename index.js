const express = require('express')
const app= express()
const dotenv=require("dotenv")
const colors = require('colors');
dotenv.config();
const cors = require('cors');
const connectDB = require('./configure/db')
const bodyparser = require("body-parser");
const path = require('path')
const { errorHandler } = require('./middleware/errormiddleware');
const port = process.env.PORT || 8000;
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(cors());
app.use('/api', require('./routes/user')) //raoul route for users
app.use(errorHandler) //error handler for default stack response
app.listen(port, () => console.log(`server listening on port ${port}`));

    
