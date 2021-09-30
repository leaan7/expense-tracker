import React, { useContext } from 'react';

import './style.css'

import { TransactionContext } from '../../../contexts/TransactionsContext'

function Transactions() {

    const [transactions, setTransaction] = useContext(TransactionContext)

    // Delete button
    function deleteTransaction(id) {
        const updatedTransactions = transactions.filter(i => i.id !== id)
        setTransaction(updatedTransactions)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/*                 <tr>
                    <td>Service</td>
                    <td>R$ 50</td>
                    <td>28/09/2021</td>
                    <td><img alt="Remove" src="./assets/remove.png" /></td>
                </tr> */}

                {transactions.map(transaction => <tr><td>{transaction.name}</td><td>R$ {transaction.amount}</td><td>{transaction.date}</td><td><button className="btn-remove" onClick={() => { deleteTransaction(transaction.id) }}><img alt="Remove" src="./assets/remove.png" /></button></td></tr>)}

            </tbody>
        </table>
    );
}

export default Transactions;