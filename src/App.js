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
console.log(transactions);
  return (
    <>
    <section className='addSection'>
      <Add></Add>
    </section>
    <section>
      <Filter></Filter>
    </section>
    <main>
      <Table
      transactions={transactions}
      ></Table>
    </main>
    </>
  );
}

export default App;
