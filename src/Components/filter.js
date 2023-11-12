import React, { Component } from 'react';

function Filter() {
    return ( 
        <form>
        <div className="filterContainer">
            <div className="expenseName__">
            
                <label htmlFor="expensename">Description</label>
                <input type="text" id="transaction" name="expensename"></input>
            </div>

            <div className="category__">
                
                <label htmlFor="category">Category</label>
                <select>
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>
                    <option value="hobby">Hobby</option>
                    <option value="sherehe">Sherehe</option>
                </select>
                
                <button className="filterBtn">Filter</button>
            </div>
            
            <div className="resetContainer" >
                <button className="resetBtn">Reset</button>
                
            </div>

               
        </div>

    </form>
     );
}

export default Filter;