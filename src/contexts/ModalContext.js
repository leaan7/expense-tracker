import React, { createContext, useState } from 'react';

export const ModalContext = createContext()

export function ModalProvider(props) {
    const [modalState, setModalState] = useState(true)

    function handleOverlay() {
        setModalState(!modalState)
    }

    return (
        <ModalContext.Provider value={[modalState, setModalState, handleOverlay]}>
            {props.children}
        </ModalContext.Provider>
    );
};