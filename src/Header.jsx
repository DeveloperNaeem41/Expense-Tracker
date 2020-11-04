import React from 'react'
import './header.css';
import { useStateValue } from './StateProvider';
const Header=()=> {
    const[{basket},dispatch]=useStateValue();
    let incomeAmount=0;
    let expenseAmount=0;
    console.log(incomeAmount+expenseAmount);
    return (
        <div className="header">
            <header>
                <h1>EXPENSE TRACKER</h1>
                <h2>Balance : ${basket.reduce((prev,curValue)=>{
                    return prev + +curValue.amount ;
                },0)} </h2>
                <div className="header_sheet">
                <div style={{display: "none"}}>
                {basket.map((val)=>{
                     if (val.amount >0 && val.description!==""){
                         let x= parseInt(val.amount);
                         return incomeAmount=(incomeAmount+x);
                     }
                     else if (val.amount <0 && val.description!=="") {
                        let x= parseInt(val.amount);
                         return expenseAmount=(expenseAmount+x);
                     }
                })}
                </div>
                        <div className="income">
                        <span >Income</span>
                        <span>${incomeAmount}</span>
                        </div>
                        <div className="expense">
                        <span >Expense</span>
                        <span>${expenseAmount}</span>
                        </div>


                </div>
            </header>
        </div>
    )
}
  
export default Header;
           