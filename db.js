const dotenv = require("dotenv")

dotenv.config()


const mongoose = require("mongoose")

const url = process.env.MONGODB_URL

const connectDB = ()=>{
    mongoose.connect(url)
    .then(() => console.log("MongoDB Connected...")
    )}

    module.exports = connectDB
