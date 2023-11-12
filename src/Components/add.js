import React, { Component } from 'react';

function Add() {
    return (
        <form>
        <div className="container">
                <div className="transaction">
            
                        <label htmlFor="transaction">Description</label>
                        <input type="text" id="transaction" name="transaction"></input>
                    
                    
                </div>
                <div className="amount__">
                
                        <label htmlFor="amount">Amount</label>
                        <input type="text" id="amount" name="amount"></input>
                    
                    
                </div>
                <div className="category__">
                
                        <label htmlFor="category">Category</label>
                        <select>
                            <option value="food">Food</option>
                            <option value="clothing">Clothing</option>
                            <option value="hobby">Hobby</option>
                            <option value="sherehe">Sherehe</option>
                        </select>
                    
                    
                </div>
                <div className="date__">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date"></input>
                    
                </div>
            
        </div>

        <button className="addBtn">Add transaction</button>
        
    </form>

      );
}

export default Add;