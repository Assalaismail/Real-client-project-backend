const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const connection = require("./configure/db.js");

const bodyparser = require("body-parser");
const path = require("path");
const { errorHandler } = require("./middleware/errormiddleware");
const conn = mongoose.connection;
const itemRouter = require("./routes/items");
<<<<<<< HEAD
const contactusRoutes = require("./routes/contact");
=======
const contactRouter = require("./routes/contact");
const catRouter = require("./routes/categories")

>>>>>>> ed3a1bca3ad36192e498bba06457f6d13029f160

connection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/item", itemRouter);
app.use("/cat", catRouter);

const port = process.env.PORT || 8000;

app.use("/contactus", contactusRoutes);
app.use("/api", require("./routes/user")); //raoul route for users
app.use(errorHandler); //error handler for default stack response
app.listen(port, () => console.log(`server listening on port ${port}`));
