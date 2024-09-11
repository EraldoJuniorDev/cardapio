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

            {/* OVERLAY DO MODAL */}
            <div
                className="bg-[rgba(0,0,0,0.8)] w-[100vw] h-[100vh] fixed"
                onClick={onClose}></div>

            {/* CONTAINER DO MODAL */}
            <div className="bg-white pb-4 rounded-3xl min-w-[90%] md:min-w-[600px] absolute">

                {/* CABEÇALHO DO MODAL */}
                <div className=" bg-[#BF0404] p-[2px] text-white border-b-2 border-gray-200 rounded-t-3xl flex items-center justify-between w-full">

                    <h2 className="text-center font-bold text-xl m-3">Meu Carrinho</h2>

                    {/* BOTÃO DE FECHAR MODAL */}
                    <button
                        className="text-2xl py-1 px-4 "
                        id="close-modal-btn"
                        onClick={onClose}><CgCloseO className="hover:text-red-600" /></button>
                </div>

                {/* ITENS DO CARRINHO */}
                <div className="flex justify-between mb-2 flex-col" id="cart-items">
                </div>

                {/* CONTEUDO DO MODAL */}
                <div className="px-4">
                    <p className="font-bold">Total: <span id="cart-total">0.00</span></p>

                    <p className="font-bold mt-4">Endereço de Entrega:</p>

                    {/* INPUT DO ENDEREÇO DE ENTREGA */}
                    <input type="text"
                        placeholder="Digite seu endereço completo..."
                        id="adress"
                        className="w-full border-2 rounded my-1 pl-[5px] py-1" />

                    {/* AVISO DE ENDEREÇO DE ENTREGA VAZIO */}
                    <p className="text-red-500 hidden" id="adress-warn">Digite seu endereço completo!</p>

                </div>

                {/* BOTÃO DE FINALIZAR COMPRA */}
                <div className="flex items-center justify-center mt-5 w-full">

                    <button className="w-80 bg-[#BF0404] hover:bg-red-400 text-white px-4 py-1 rounded" id="checkout-btn">Finalizar pedido</button>

                </div>

            </div>

        </div>
    )
}