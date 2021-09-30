import { useContext } from 'react';
import './App.css';

import Header from './components/Header/Header'
import Main from './components/Main';
import Footer from './components/Footer/Footer'
import ModalOverlay from './components/Modal/Modal';


import { ModalContext, ModalProvider } from './contexts/ModalContext'
import {TransactionProvider} from './contexts/TransactionsContext'


function App() {

  const [modalState,modalSetState] = useContext(ModalContext)

  return (
  <TransactionProvider>
    <div className="App">
      {/* Turn On/Off - Transaction Form */}
      {modalState ? null : <ModalOverlay/>}
      <Header/>
      <Main/>
      <Footer/>   
    </div>
  </TransactionProvider>
  );
}

export default App;
