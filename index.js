const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./configure/db");
const bodyParser = require("body-parser");
const { errorHandler } = require("./middleware/errormiddleware");
const itemRouter = require("./routes/items");
const contactRouter = require("./routes/contact");

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/item", itemRouter);

app.use("/api", require("./routes/user")); // Raoul route for users
app.use("/api/contacts", contactRouter);
app.use(errorHandler); // Error handler for default stack response

app.listen(port, () => console.log(`Server listening on port ${port}...`));
