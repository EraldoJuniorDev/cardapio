import { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";
import CartItems from "../components/Cart/CartItems";
import Cart from "../app/data/cartList/cart";
import { PiEmptyBold } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { IoCalendarOutline } from "react-icons/io5";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

function handleTotal() {
    const total = Cart.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);
    const formattedPrice = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return { total, formattedPrice };
}

function checkRestaurantOpen() {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora < 22;
}

export default function Modal({ isOpen, onClose }: ModalProps) {

    const [adress, setAdress] = useState("");
    const [isRestaurantOpen, setIsRestaurantOpen] = useState(checkRestaurantOpen());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsRestaurantOpen(checkRestaurantOpen());
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    if (!isOpen) return null;

    return (

        <div
            className=" w-full h-full fixed z-[99] flex items-center justify-center top-0 right-0 bottom-0 left-0">

            {/* OVERLAY DO MODAL */}
            <div
                className="bg-[rgba(0,0,0,0.8)] w-[100vw] h-[100vh] fixed"
                onClick={onClose}></div>

            {/* CONTAINER DO MODAL */}
            <div className="bg-white h-fit flex flex-col gap-1 pb-4 rounded-3xl min-w-[90%] md:min-w-[600px] absolute " onKeyDown={onClose}>

                {/* CABEÇALHO DO MODAL */}

                {isRestaurantOpen ? (

                    <div className="bg-green-600 p-[2px] text-white border-b-2 border-gray-200 rounded-t-3xl flex items-center justify-between w-full">

                        <h2 className="text-center font-bold text-base m-3">Meu Carrinho</h2>

                        {/* BOTÃO DE FECHAR MODAL */}
                        <button
                            className="text-2xl py-1 px-4"
                            id="close-modal-btn"
                            onClick={onClose}><CgCloseO className="hover:scale-125 hover:duration-200" /></button>
                    </div>

                ) : (

                    <div className="bg-[#BF0404] p-[2px] text-white border-b-2 border-gray-200 rounded-t-3xl flex items-center justify-between w-full">

                        <h2 className="text-center font-bold text-base m-3">Meu Carrinho</h2>

                        {/* BOTÃO DE FECHAR MODAL */}
                        <button
                            className="text-2xl py-1 px-4 "
                            id="close-modal-btn"
                            onClick={onClose}><CgCloseO className="hover:scale-125 hover:duration-200" /></button>
                    </div>

                )}

                {/* ITENS DO CARRINHO */}
                {Cart.length > 0 && (
                    <div className="flex justify-between gap-1 overflow-scroll overflow-x-hidden max-h-96 mb-2 flex-col sm:m-5 rounded-base" id="cart-items">
                        <CartItems />
                    </div>
                )}
                {Cart.length === 0 && (
                    <p className="bg-gray-100 text-[#BF0404] shadow-inner text-lg h-24 gap-2 flex items-center justify-center">Seu carrinho está vazio! <PiEmptyBold /></p>
                )}

                {/* CONTEUDO DO MODAL */}
                <div className="px-4 flex flex-col gap-1">

                    {/* INPUT DO ENDEREÇO DE ENTREGA */}
                    <label className="flex items-center text-center gap-2" htmlFor="adress"><ImLocation className="text-[#BF0404]"/>
                        Endereço de Entrega:</label>

                    <input
                        type="text"
                        placeholder="Digite seu endereço completo..."
                        id="adress"
                        name="adress"
                        value={adress}
                        className="text-sm bg-gray-100 w-full border-none rounded my-1 p-2 shadow-inner"
                        onChange={(e) => setAdress(e.target.value)} />

                    {/* AVISO DE ENDEREÇO DE ENTREGA VAZIO */}
                    <p className="text-red-500 hidden" id="adress-warn">Digite seu endereço completo!</p>

                    <p className="text-sm font-bold">Total: <span id="cart-total">{handleTotal().formattedPrice}</span></p>

                </div>

                {/* BOTÃO DE FINALIZAR COMPRA */}
                <div className="flex items-center justify-center mt-5 w-full">

                    {isRestaurantOpen ? (

                        <button className="font-sm w-80 bg-green-600 hover:scale-105 hover:duration-200 text-white px-4 py-1 rounded-3xl" id="checkout-btn">
                            Finalizar pedido
                        </button>

                    ) : (

                        <button className="font-sm w-80 flex items-center justify-center gap-3 bg-[#BF0404] hover:scale-105 hover:duration-200 text-white px-4 py-1 rounded-3xl" id="checkout-btn">Agendar Pedido <IoCalendarOutline /></button>

                    )}

                </div>

            </div>

        </div>
    )
}