import React, { Component, useEffect, useState } from 'react';
import Table from './Components/table';
import Add from './Components/add';
import Filter from './Components/filter';


function App() {
const [transactions,setTransactions] = useState([]);

useEffect(() => {
  getTransactions();
},[])

useEffect(() => {
  console.log("Updated transactions:", transactions);
}, [transactions]);

function getTransactions(){
  fetch(' http://localhost:3000/transactions')
  .then(res => res.json())
  .then(data => setTransactions(data));
  
}



async function handleDelete(id){
  try {
    const updatedData = transactions.filter(data => data.id !== id);
    setTransactions(updatedData)
  } catch (error) {

    console.error('Error deleting transactions:', error);
    
  }
}

function updateParentState(newState){
  console.log(newState);
  setTransactions(newState)
  console.log(transactions);
}
  return (
    <>
    <section className='addSection'>
      <Add
      onUpdateState = {updateParentState}
     transactions={transactions} 
     setTransactions={setTransactions}
      ></Add>
    </section>
    <section>
      <Filter 
      transactions = {transactions}
      setTransactions = {setTransactions}
      getTransactions = {getTransactions}
      ></Filter>
    </section>
    <main>
      <Table
      handleDelete={handleDelete}
      transactions={transactions}
      ></Table>
    </main>
    </>
  );
}

export default App;
