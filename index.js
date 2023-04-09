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

connectDB()
const path = require('path');
const itemRouter = require("./routes/items")



app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(cors());

connection();

const conn = mongoose.connection;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use("/item", itemRouter);

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));

app.use('/api', require('./routes/user')) //raoul route for users
app.use(errorHandler) //error handler for default stack response
app.listen(port, () => console.log(`server listening on port ${port}`));

    
