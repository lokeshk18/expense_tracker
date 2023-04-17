import { useEffect, useState } from 'react';
import './App.css'
import Expenses from './components/expenses/expenses';
import Newexpense  from './components/new_expense/Newexpense';
import { Heading } from './components/expenses/header/Heading';
// import { getAllExpenses } from './api';

function App() {
  const dummyData = [
    {
      id: 'e1',
      title: 'Groceries',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
    {
      id: 'e3',
      title: 'Car Repair',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New work desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses , setExpenses] = useState([])

  useEffect(()=>{
       fetch('http://localhost:4000/api/expenses')
      .then(res=>res.json())
      .then(data=>setExpenses(data.data))
      .catch(error=>console.log(error))
  },[])

  const apinewdata=async(data,id)=>{
    const res=await (await fetch('http://localhost:4000/api/create',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })).json()
    console.log(data);
    setExpenses((previous_state)=>[{...data},...previous_state])
  
  }

  const addNewExpense = async(data)=>{
      console.log({title:data.title,amount:Number(data.amount),desc:"",date:data.date})
      // console.log({...data,id:nanoid()})
      // DUMMY_DATA.push({...data,id:nanoid()})
      await apinewdata({title:data.title,amount:Number(data.amount),desc:"",date:data.date},data.id)
  }
  return (
    <div className="App">
        <Heading/>
        <Newexpense  submitAction={addNewExpense}/>
        <Expenses expenses={expenses} />
    </div>
  )
}

export default App