import React from "react";
import "./expenses.css"
import ExpenseList from "./expense_list/ExpenseList";

const Expenses = (props)=>{
    const {expenses=[]}=props;
    console.log(expenses)
    return(
        <>
        <div className="expenses">
            
            <ExpenseList expenses={expenses}/>
        </div>
        </>
    )
}

export default Expenses;