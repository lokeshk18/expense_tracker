import React from 'react'
import "./Newexpense.css"
import NewExpenseForm from './new_expense_form/NewExpenseForm'
import {nanoid} from "nanoid"

const Newexpense = (props) => {
  const {submitAction} = props
  const onAddNewExpense = (expense)=>{
    const modified_expense = {
      ...expense,
      id:nanoid()
    }
    submitAction(modified_expense)
  }
  return (
    <div className='new-expense'>
        <NewExpenseForm save={onAddNewExpense}/>
    </div>
  )
}

export default Newexpense;