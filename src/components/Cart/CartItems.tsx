import { MdDeleteForever } from "react-icons/md";
import { ProductProps } from "../Products/Drinks";
import Image from "next/image";
import Cart from "../../app/data/cartList/cart";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export default function CartItems() {

    const handleDeleteItem = (productId: number) => {

        const updatedCart = Cart.filter((item) => item.id !== productId);

        console.log(productId)


    };

    return (

        <div className="shadow-2xl rounded flex flex-col p-1 gap-3 sm:p-3">

            {Cart.map((handleCartItem) => (

                <div key={handleCartItem.id} className="flex items-center justify-around text-center w-full py-2 px-4 shadow-inner bg-gray-100 rounded">

                    {/* IMAGEM DO PRODUTO */}
                    <Image
                        className="rounded hidden sm:flex"
                        src={handleCartItem.image}
                        alt={handleCartItem.name}
                        width={80}
                        height={80} />

                    {/* CONTAINER DO TOOLTIP DO NOME DO PRODUTO */}
                    <TooltipProvider>

                        <Tooltip>

                            <TooltipTrigger>

                                {/* GATILHO DO TOOLTIP DO NOME DO PRODUTO */}

                                {/* RENDERIZA SOMENTE O NOME SE type NÃO EXISTIR */}
                                {!handleCartItem.type && (

                                    <h2 className="w-24 sm:w-fit font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">

                                        {handleCartItem.name}

                                        </h2>
                                )}

                                {/* RENDERIZA NOME E TIPO SE AMBOS EXISTIREM */}
                                {handleCartItem.type && (

                                    <div className="flex items-center sm:gap-2">

                                        <h2 className="w-24 sm:w-fit font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">

                                            {handleCartItem.name}

                                            </h2>

                                        <p className="text-xs">
                                            ({handleCartItem.type})

                                        </p>

                                    </div>
                                )}


                            </TooltipTrigger>

                            {/* CONTEUDO DO TOOLTIP DO NOME DO PRODUTO */}

                            <TooltipContent>

                                <p className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm sm:hidden cursor-progress">{handleCartItem.name}</p>

                            </TooltipContent>

                        </Tooltip>

                    </TooltipProvider>

                    {/* QUANTIDADE DE PRODUTOS */}
                    <p className="text-xs">(Quantidade: {handleCartItem.quantity})</p>

                    {/* PREÇO DO PRODUTO */}
                    <p className="text-xs">{handleCartItem.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                    </p>

                    {/* BOTÃO DE DELETAR UM PRODUTO */}
                    <button
                        onClick={() => handleDeleteItem(handleCartItem.id)}
                        className="text-red-600 text-2xl"><MdDeleteForever />
                    </button>

                </div>

            ))}

        </div>
    )
}