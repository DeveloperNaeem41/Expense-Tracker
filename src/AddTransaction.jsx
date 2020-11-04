import React,{useState} from 'react';
import './addtransaction.css';
import { useStateValue } from './StateProvider';

const AddTransaction=()=>{
    const[{basket},dispatch]=useStateValue();
    const[val,setValue]= useState({
        description:"",
        amount:""
    });

    const takeValue=(event)=>{
        const value = event.target.value;
        const name =event.target.name;
        setValue((preValue)=>{
            console.log(preValue);
        return {
            ...preValue,
            [name]:value, 
    }
});  

    }
    const addToTransactionHistory=()=>{

        // if (val.description===""){
        //     alert('Enter the description');
        // }
        // else if  (val.amount===""){
        //     alert('Enter the amout');
        // } 
        // else if(val.description==="" && val.amount===""){
        //     alert('Enter the description and amount');
        // }
        dispatch({
            type: "ADD_TO_HISTORY",
            item:{
                description : val.description,
                amount :val.amount ,
            }
        })
    }

    const onSubmission=(event)=>{
        console.log(event);
        event.preventDefault();
        setValue({
            description :"",
            amount :""
        });
        
    }

    return(
        <div className="addtransaction">
            <h4>Add Transaction</h4>
            <hr />
            <div className="form">
              <form onSubmit={onSubmission}>
                <label className="label">Description:</label>
                <input onChange={takeValue} className="input" value={val.description} name="description" type="text" placeholder="Enter Description" autoComplete="off" />
                <label className="label">Amount:</label>
                <input onChange={takeValue} className="input" value={val.amount} name="amount" type="number" placeholder="-ive-->expense,+ive-->income" autoComplete="off" />
                <button className="add_btn" onClick={addToTransactionHistory} >Add</button>
              </form>  
            </div>
        </div>
    )
}
export default  AddTransaction;