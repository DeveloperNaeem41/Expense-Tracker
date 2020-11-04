import React from 'react';
import { useStateValue } from './StateProvider';
import './transactionlist.css';

const TransactionList=()=> {
    const [{basket},dispatch]=useStateValue();
    console.log("Transaction List",basket);

//On Click Deleting The List.

    const deleteTransaction=(id)=>{
        dispatch({
            type: "REMOVE_FROM_LIST",
            id:id,
            
        })

    }
    return (
        <div className="transaction">
            <h4>Transaction History</h4>
            <hr />
            {  basket.map((val,index)=>{
                if (val.amount <0 && val.description!==""){
                return <div className="transaction_red" id={index}>
                <span className="transaction_title">{val.description}</span>
                <span className="transaction_value">{val.amount}</span>
                <button onClick={deleteTransaction} style={{backgroundColor:"red", border:"2px solid red"}} >X</button>
            </div>
                }
                else if (val.amount >0 && val.description!=="") {
                 return  <div className="transaction_green" id={index}>
                <span className="transaction_title">{val.description}</span>
                <span className="transaction_value" >{val.amount}</span>
                <button onClick={deleteTransaction} style={{backgroundColor:"green", border:"2px solid green"}}>X</button>
            </div>   
                }
                {/* else if ((val.description==="") && (val.amount==="") ) {
                    return alert("Fill the fields correctly");
                } */}
            })
            }
            {/* <div className="transaction_red">
                <span className="transaction_title">Electr</span>
                <span className="transaction_value">$-6000</span>
                <button>X</button>
            </div> */}
            {/* <div className="transaction_green">
                <span className="transaction_title">Salary</span>
                <span className="transaction_value" >$6000</span>
                <button style={{backgroundColor:"green", border:"2px solid green"}}>X</button>
            </div> */}

        </div>
    )
}

export default TransactionList;
