const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    title:String,
    amount:Number,
    desc:String,
    date:Date
})

module.exports = mongoose.model('Expense',ExpenseSchema)