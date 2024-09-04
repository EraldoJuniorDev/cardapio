export default function Modal(){
    return(

        <dialog className="bg-black/50 w-full h-full fixed top-0 left-0 z-[99] hidden items-center justify-center">

            <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">

                <h2 className="text-center font-bold text-xl mb-2">Meu Carrinho</h2>

                <div className="flex justify-between mb-2 flex-col" id="cart-items">
                </div>

                <p className="font-bold">Total: <span id="cart-total">0.00</span></p>

                <p className="font-bold mt-4">Endereço de Entrega:</p>
                <input type="text"
                placeholder="Digite seu endereço completo..."
                id="adress"
                className="w-full border-2 rounded my-1" />

                <p className="text-red-500 hidden" id="adress-warn">Digite seu endereço completo!</p>

                <div className="flex items-center justify-between mt-5 w-full">

                    <button id="close-modal-btn">Fechar</button>

                    <button className="bg-green-500 text-white px-4 py-1 rounded" id="checkout-btn">Finalizar pedido</button>
                </div>

            </div>
        </dialog>
    )
}