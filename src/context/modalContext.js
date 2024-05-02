import { createContext, useContext, useState } from "react";

const modalContext=createContext();

export const ModalProvider=({children})=>{
const [showModal, setShowModal]=useState(false);

const showModalHandler=()=>{
    setShowModal(true);
}
const closeModalHandler=()=>{
    setShowModal(false);
}

    return <modalContext.Provider
     value={{showModal, showModalHandler, closeModalHandler}}>
        {children}
    </modalContext.Provider>
}

//Custom hook to consume the modal context anywhere in  app

export const useModalContext=()=>{
    return useContext(modalContext);
}