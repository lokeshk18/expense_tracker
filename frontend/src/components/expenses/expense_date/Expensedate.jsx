import React from 'react'
import "./Expensedate.css"

function Expensedate(props) {
    const {date}=props;
    const d = new Date(date)
    const month =  d.toLocaleString('en-US', { month: 'long' })
    const day = d.toLocaleString('en-US', { day: 'numeric' })
    const year = d.getFullYear()
    
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month} </div>
            <div className='expense-date__day'>{day} </div>
            <div className='expense-date__year'>{year} </div>
        </div>
    )
}

export default Expensedate