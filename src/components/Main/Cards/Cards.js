import React from 'react';
import { useContext } from 'react/cjs/react.development';

import {TransactionContext} from '../../../contexts/TransactionsContext';

import './style.css'


function Cards() {

  const [transactions] = useContext(TransactionContext)

  const values = transactions.map(i => Number(i.amount))

  const total = values.reduce((ant,pos) => ant += pos,0)

  const entries = values.filter(i => i >= 0).reduce((ant,pos) => ant += pos,0)

  const expenses = values.filter(i => i < 0).reduce((ant,pos) => ant += pos,0)
  
  return (
    <div className="cards-container">
      <div className="total-card">
        <h3 className="title-card"><span>Total</span> <span><img alt="Total" src="./assets/total.png" /></span></h3>
        <p className="value-card">R$ {total}</p>
      </div>

      <div className="entry-card">
        <h3 className="title-card"><span>Entry</span> <span><img alt="Entry" src="./assets/entry.png" /></span></h3>
        <p className="value-card">R$ {entries}</p>
      </div>

      <div className="expense-card">
        <h3 className="title-card"><span>Expense</span> <span><img alt="Expense" src="./assets/expense.png" /></span></h3>
        <p className="value-card">R$ {expenses}</p>
      </div>
    </div>
  );
}

export default Cards;