import React, { useState, useContext } from 'react';

import './style.css'

import { ModalContext } from '../../contexts/ModalContext'
import { TransactionContext } from '../../contexts/TransactionsContext'

function Modal() {
    // Overlay
    const [modalState, setModalState, handleOverlay] = useContext(ModalContext)

    // Input Values
    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    function handleInputName(event) {
        setInputName(event.target.value)
    }
    function handleInputAmount(event) {
        setInputAmount(event.target.value)
    }

    function handleInputDate(event) {
        setInputDate(event.target.value)
    }

    // Clear inputs Function
    function clearInputs() {
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    // Transaction Context
    const [transactions, setTransaction] = useContext(TransactionContext)

    // Save Transaction Function
    function saveTrasaction(event) {
        event.preventDefault()

        // Verify inputs
        if (inputName && inputAmount && inputDate) {

            // Setting Transaction
            setTransaction([...transactions, { id: transactions.length + 1, name: inputName, amount: inputAmount, date: inputDate.replace(/-/g, '/').split('/').reverse().join('/') }])

            // Turn off Modal
            handleOverlay()

            //Clear inputs
            clearInputs()
        }
    }

    return (
        <div className="modal">
            <h2>New transaction</h2>

            <div className="modal-inputs">
                <input className="modal-input-name" onChange={handleInputName} value={inputName} type="text" placeholder="Transaction Name" />
                <input className="modal-input-amount" onChange={handleInputAmount} value={inputAmount} type="number" placeholder="Amount" />
                <input className="modal-input-date  " onChange={handleInputDate} type="date"/>
            </div>
            <div className="modal-buttons">
                <button className="btn-modal-add" onClick={saveTrasaction}>Submit</button>
                <button className="btn-modal-cancel" onClick={handleOverlay}>Cancel</button>
            </div>
        </div>
    )
}


// Modal overlay
function ModalOverlay() {
    return (<div className="modal-overlay">
        {/* Modal form */}
        <Modal />
    </div>)
}

export default ModalOverlay;