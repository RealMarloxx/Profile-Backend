
const express = require ("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./db")
const Users = require("./models/usersSchema")
const router = require("./routes/usersRoute")
dotenv.config()

const app = express()

//Middlewares
app.use(express.json())
app.use(morgan())

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server started listening @ ${PORT}`)
})

connectDB()

app.use("/api", router)