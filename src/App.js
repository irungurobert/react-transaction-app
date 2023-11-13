import React, { Component, useEffect, useState } from 'react';
import Table from './Components/table';
import Add from './Components/add';
import Filter from './Components/filter';


function App() {
const [transactions,setTransactions] = useState([]);

useEffect(() => {
  fetch(' http://localhost:3000/transactions')
  .then(res => res.json())
  .then(data => setTransactions(data));
},[])

useEffect(() => {
  console.log("Updated transactions:", transactions);
}, [transactions]);


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
    {console.log(transactions)}
    <section className='addSection'>
      <Add
      onUpdateState = {updateParentState}
     transactions={transactions} 
     setTransactions={setTransactions}
      ></Add>
    </section>
    <section>
      <Filter></Filter>
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
