import { MdDeleteForever } from "react-icons/md";
import Image from "next/image";
import Cart from "../../app/data/cartList/cart";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function CartItems() {
    const [cart, setCart] = useState(Cart);

    const handleDeleteItem = (itemId: number) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);

        console.log(newCart)
    };

    return (
        <div className="shadow-2xl rounded flex flex-col p-1 gap-3 sm:p-3 sm:bg-gray-300">
            {cart.map((cartItem) => (
                <div key={cartItem.id} className="flex items-center justify-between text-center w-full py-2 px-4 shadow-inner bg-gray-100 rounded">
                    {/* IMAGEM DO PRODUTO */}
                    <Image
                        className="rounded hidden sm:flex"
                        src={cartItem.image}
                        alt={cartItem.name}
                        width={80}
                        height={80}
                    />

                    {/* CONTAINER DO TOOLTIP DO NOME DO PRODUTO */}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                {/* RENDERIZA SOMENTE O NOME SE type NÃO EXISTIR */}
                                {!cartItem.type ? (
                                    <h2 className="w-24 sm:w-fit font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                        {cartItem.name}
                                    </h2>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <h2 className="w-24 sm:w-fit font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                            {cartItem.name}
                                        </h2>
                                        <p className="text-xs">({cartItem.type})</p>
                                    </div>
                                )}
                            </TooltipTrigger>
                            {/* CONTEUDO DO TOOLTIP DO NOME DO PRODUTO */}
                            <TooltipContent>
                                <p className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm sm:hidden cursor-progress">
                                    {cartItem.name}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    {/* QUANTIDADE DE PRODUTOS */}
                    <div className="text-xs flex items-center gap-2">
                        <span>Quantidade:</span>
                        <button className="text-sm text-green-600">
                            <FaPlus />
                        </button>
                        <span>{cartItem.quantity}</span>
                        <button className="text-sm text-[#ff0808f3]">
                            <FaMinus />
                        </button>
                    </div>

                    {/* PREÇO DO PRODUTO */}
                    <p className="text-xs">
                        {cartItem.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}
                    </p>

                    {/* BOTÃO DE DELETAR UM PRODUTO */}
                    <button
                        onClick={() => handleDeleteItem(cartItem.id)}
                        className="text-red-600 text-2xl"
                    >
                        <MdDeleteForever />
                    </button>
                </div>
            ))}
        </div>
    );
}
