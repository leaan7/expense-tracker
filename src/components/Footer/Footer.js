import React, {useContext} from 'react';

import './style.css'

import {ModalContext} from '../../contexts/ModalContext'

function Footer() {

  // Modal context for turn on/off modal
  const [modalState,setModalState,handleOverlay] = useContext(ModalContext)

  return  <footer>
              <button className="add-button" onClick={handleOverlay}><img src="./assets/add.png"/></button>
          </footer>;
}

export default Footer;