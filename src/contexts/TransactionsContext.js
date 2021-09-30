import React, { createContext, useEffect, useState } from 'react'

export const TransactionContext = createContext()

export function TransactionProvider (props) {

    const [transactions, setTransaction] = useState([])

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('transactions'))
        setTransaction([...storage])
    }, [])

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions])

    return (
        <TransactionContext.Provider value={[transactions,setTransaction]}>
            {props.children}
        </TransactionContext.Provider>
    )
}