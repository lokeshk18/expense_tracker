const mongoose = require("mongoose")

const dbUrl = "mongodb://localhost:27017/expense_tracker"
mongoose.connect(dbUrl)
const db = mongoose.connection
db.on("error",()=>console.log("Connection Failed"))
db.once("open",()=>console.log("Database Connected"))
