const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
mongoose.set("strictQuery", true);
const connectDB = async () => {
    try {
        const cnct = await mongoose.connect(process.env.DB)
        console.log (`MongoDB Connected: ${cnct.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB 