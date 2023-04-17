import React from "react";
import "./ExpenseList.css";
import Expenseitem from "../expense_item/Expenseitem";

const ExpenseList = (props)=>{
    
    const {expenses=[]} = props

    // const newex= expenses.data
    console.log(expenses)
    
    if(expenses.length===0){
        return(
            <h3>No Expenses found</h3>
        )
    }

    return(
        <ul className="expenses-list">
            {expenses.map((ele)=>(
                
                <Expenseitem 
                    title={ele.title}
                    amount={ele.amount}
                    date={ele.date}
                    key={ele._id}
                />
                
            )
      )}
        </ul>
    )
}

export default ExpenseList;