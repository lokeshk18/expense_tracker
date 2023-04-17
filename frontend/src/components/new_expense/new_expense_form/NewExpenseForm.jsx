import React, { useState } from "react";
import "./NewExpenseForm.css"

const NewExpenseForm = (props)=>{

    const {save} = props
    const [title , setTitle]= useState('') 
    const [amount , setAmount]= useState('') 
    const [date , setDate]= useState('') 

    const onTitleChange = (event)=>{
        setTitle(event.target.value)
    } 
    const onAmountChange = (event)=>{
        setAmount(event.target.value)
    } 
    const onDateChange = (event)=>{
        setDate(event.target.value)
    } 
    const onSubmitHandler = (event)=>{
        event.preventDefault()
        const new_expense = {
           title,
           amount,
           date:new Date(date)
        }
        save(new_expense)
    }

    return(
        <div>
            <form action="" onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="expense_title">Title</label>
                    <input type="text" id="expense_title" name='title' onChange={onTitleChange} value={title}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expense_amount">Amount</label>
                    <input type="number" id="expense_amount" name="amount" min="0" max="1000" onChange={onAmountChange} value={amount}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expense_date">Date</label>
                    <input type="date" id="expense_date" name='date' onChange={onDateChange} value={date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Cancel</button>
                <button>Add Expense</button>
            </div>  
        </form>
        </div>
    )
}
export default NewExpenseForm;