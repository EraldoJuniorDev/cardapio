import { MdDeleteForever } from "react-icons/md";
import { ProductProps } from "../Products/Drinks";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export default function CartItems({ image, name, price, type, quantity }: ProductProps) {

    return (
        
        <div className="bg-gray-100 shadow-inner rounded flex py-2 border-y-2 px-4">

            <div className="flex items-center justify-around text-center w-full">

                {/* IMAGEM DO PRODUTO */}

                <Image
                    className="rounded hidden sm:flex"
                    src={image!}
                    alt={name}
                    width={80}
                    height={80} />

                {/* CONTAINER DO TOOLTIP DO NOME DO PRODUTO */}

                <TooltipProvider>

                    <Tooltip>

                        <TooltipTrigger>

                            {/* GATILHO DO TOOLTIP DO NOME DO PRODUTO */}

                            <h2 className="w-44 sm:w-64 font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>

                        </TooltipTrigger>

                        {/* CONTEUDO DO TOOLTIP DO NOME DO PRODUTO */}

                        <TooltipContent>

                            <p className="sm:hidden absolute shadow-lg group-hover:block bg-[#333] text-white font-semibold px-3 py-2 text-[13px] left-full ml-3 top-0 bottom-0 my-auto h-max w-max rounded-md before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:bottom-0 before:top-0 before:my-auto before:-left-1 before:mx-auto">{name}</p>

                        </TooltipContent>

                    </Tooltip>

                </TooltipProvider>

                {/* QUANTIDADE DE PRODUTOS */}

                <p className="text-xs">(Quantidade: {quantity})</p>

                {/* PREÇO DO PRODUTO */}

                <p className="text-xs">R$ {price.toFixed(2)}</p>

            </div>

            {/* BOTÃO DE DELETAR UM PRODUTO */}

            <div className="flex items-center">

                <button className="text-red-600 text-2xl"><MdDeleteForever /></button>

            </div>

        </div>
    )
}