import React, { useReducer } from 'react';
import Header from "./Components/Header/Header";
import History from "./Components/History";
import AddTransaction from "./Components/AddTransaction";
import { Provider } from './Context'
import Styles from "./App.module.css";
import { Reducer } from './Reducer';
import { ADD_TRANSACTION, REMOVE_TRANSACTION } from './Reducer/Types'

function App() {
  const [state, dispatch] = useReducer(Reducer, { transactions: [] })
  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      Payload: transaction
    })
  }
  const removeTransaction = (id) => {
    dispatch({
      type: REMOVE_TRANSACTION,
      Payload: id
    })
  }
  return (
    <Provider value={{
      transactions: state.transactions,
      addTransaction,
      removeTransaction
    }}>
      <div className={Styles.container}>
        <Header />
        <History />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
