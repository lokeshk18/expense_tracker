import React, { useState } from "react";
import './Expenseitem.css'
import Expensedate from "../expense_date/Expensedate";

const Expenseitem = (props)=>{
    const {
        date=new Date(),
        title="sample",
        amount=0
    } = props
    let [modified,setModified] = useState(title);
    const isUpdate =()=>{
        setModified("Updated")
    }
    
    return (
        <div className="expense-item">
            <Expensedate date={date}/>
            <div className="expense-item__description">
                <h2>{modified}</h2>
                <div className="expense-item__price">$ {amount}</div>
            </div>
        </div>
    )
}

export default Expenseitem;