import { CgCloseO } from "react-icons/cg";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {

    if (!isOpen) return null;

    return (

        <div
            className=" w-full h-full fixed z-[99] flex items-center justify-center top-0 right-0 bottom-0 left-0">

            <div
            className="bg-[rgba(0,0,0,0.8)] w-[100vw] h-[100vh] fixed"
            onClick={onClose}></div>

            <div className="bg-white p-5 rounded-3xl min-w-[90%] md:min-w-[600px] absolute">

                <div className="flex justify-end w-full h-[2.3px]">
                    <button
                        className="text-2xl text-red-500 hover:text-red-400 py-1 px-4 "
                        id="close-modal-btn"
                        onClick={onClose}><CgCloseO /></button>
                </div>

                <h2 className="text-center font-bold text-xl mb-2">Meu Carrinho</h2>

                <div className="flex justify-between mb-2 flex-col" id="cart-items">
                </div>

                <p className="font-bold">Total: <span id="cart-total">0.00</span></p>

                <p className="font-bold mt-4">Endereço de Entrega:</p>
                <input type="text"
                    placeholder="Digite seu endereço completo..."
                    id="adress"
                    className="w-full border-2 outline-green-500 rounded my-1 pl-[5px] py-1" />

                <p className="text-red-500 hidden" id="adress-warn">Digite seu endereço completo!</p>

                <div className="flex items-center justify-center mt-5 w-full">



                    <button className="w-80 bg-green-600 hover:bg-green-400 text-white px-4 py-1 rounded-2xl" id="checkout-btn">Finalizar pedido</button>
                </div>

            </div>

        </div>
    )
}