
import react from 'react';
import './App.css';
import { Header } from './components/Header';
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {TransactionList} from './components/TransactionList'
import { AddTransactions } from './components/AddTransactions';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider className="App">
     <Header />
     <div className='container'>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransactions />
     </div>
    </GlobalProvider>
  );
}

export default App;
