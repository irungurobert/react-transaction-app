import React, { Component, useState } from 'react';

function Filter({transactions,getTransactions,setTransactions}) {

    const [category,setCategory] = useState('');

    function handleFilter(category){
        const filteredTransactions = transactions.filter(data => data.category == category)
        setTransactions(filteredTransactions)
        setCategory('')
      }
      
    return (
        <>

        <form onSubmit={e => e.preventDefault()}>
        <div className="filterContainer">

            <div className="category__">
                
                <label htmlFor="category">Category</label>
                <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value=""></option>
                            <option value="Food">Food</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Income">Income</option>
                            <option value="Gift">Gift</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Housing">Housing</option>
                </select>
                
                <button onClick={() => handleFilter(category)} className="filterBtn">Filter</button>
                <button onClick={getTransactions} className="resetBtn">Reset</button>
            </div>
            
            <div className="resetContainer" >
                
            </div>

               
        </div>

    </form>
        </> 
     );
}

export default Filter;