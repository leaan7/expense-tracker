import React from 'react';

import Cards from './Cards/Cards'
import Transactions from './Transactions/Transactions'

import './style.css'

function Main() {
    return (
        <div className="main">
            <Cards/>
            <Transactions/> 
        </div>
    );
}

export default Main;