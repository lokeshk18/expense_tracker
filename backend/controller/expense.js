const Expense = require("../model/expense")

module.exports.getAll = async(req,res)=>{
    try{
        const expenses= await Expense.find({})
        return res.status(200).json({data:expenses,length:expenses.length})
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports.create = async(req,res)=>{
    try{
        const expenses = req.body;
        await Expense.create(expenses)
        res.status(200).json({msg:'Created'})
    }
    catch(err){
        res.status(500).json({msg:'Error'})
    }
}

module.exports.put = async(req,res)=>{
    try{
        await Expense.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json("Done")
    }

    catch(err){
        res.status(404).json("Error")
    }
}