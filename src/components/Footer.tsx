'use client'

import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Modal from "./Modal";

export default function Footer() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleOpenModal(){
        setModalIsOpen(!modalIsOpen)
    }

    return (

        <footer className="w-full h-11 bg-red-500 fixed bottom-0 z-40 flex justify-center">

            <button
                className=" w-full flex items-center justify-center gap-2 text-white font-bold"
                id="cart-btn"
                onClick={handleOpenModal}>

                (<span id="cart-count">0</span>)
                Veja meu carinho

                <FaCartPlus className="text-2xl py-1" />

            </button>

            <Modal isOpen={modalIsOpen} onClose={handleOpenModal}/>

        </footer>
    )
}