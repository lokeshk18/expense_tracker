const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const db= require("./config/db")
const {getAll,create, put} = require("./controller/expense")
const app = new express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// db()
app.use(cors({origin:"*"}))
const dbUrl = "mongodb://localhost:27017/expense_tracker"
mongoose.connect(dbUrl)
const db = mongoose.connection
db.on("error",()=>console.log("Connection Failed"))
db.once("open",()=>console.log("Database Connected"))

app.get("/api/expenses",getAll)

app.post("/api/create",create)

app.put("/put/:id",put)

app.listen(4000,()=>{
    console.log("Port 3000")
})