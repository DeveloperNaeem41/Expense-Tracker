import React from 'react';
import Header from './Header';
import './App.css';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

function App() {
  return (
    <div className="app">
      <Header />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
