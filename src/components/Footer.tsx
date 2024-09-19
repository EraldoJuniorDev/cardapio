'use client'

import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import Modal from "./Modal";
import Cart from "@/app/data/cartList/cart";

export default function Footer() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    setCountCart(Cart.length);
  }, [countCart]);


  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (

    <footer className="w-full h-11 bg-[#BF0404] hover:bg-[#cf3434] fixed bottom-0 z-40 flex justify-center rounded-t-2xl">
      {/* BOTÃO DE ABRIR O MODAL */}
      <button
        className="w-full flex items-center justify-center gap-2 text-white font-bold"
        id="cart-btn"
        onClick={handleOpenModal}
      >
        {/* CONTADOR DE ITENS DO CARRINHO */}
        <span id="cart-count">({countCart})</span>
        Meu carinho
        {/* ÍCONE DO BOTÃO DE ABRIR O MODAL */}
        <FaCartPlus className="text-2xl py-1" />
      </button>
      <Modal isOpen={modalIsOpen} onClose={handleOpenModal} />
    </footer>

  )
}