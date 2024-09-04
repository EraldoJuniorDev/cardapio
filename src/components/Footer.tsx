import { FaCartPlus } from "react-icons/fa";

export default function Footer() {
    return (

        <footer className="w-full h-11 bg-red-500 fixed bottom-0 z-40 flex justify-center">

            <button className=" w-full flex items-center justify-center gap-2 text-white font-bold"
                id="cart-btn">

                (<span id="cart-count">0</span>)
                Veja meu carinho

                <FaCartPlus className="text-2xl py-1" />

            </button>

        </footer>
    )
}