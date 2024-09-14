import { MdDeleteForever } from "react-icons/md";
import { ProductProps } from "../Products/Drinks";
import Image from "next/image";

export default function CartItems({ image, name, price, type, quantity }: ProductProps) {


    return (
        <div className="bg-gray-100 shadow-inner rounded flex py-2 border-y-2  gap-14 px-4">
            <div className="flex items-center justify-around text-center w-full">
                <Image
                className="rounded"
                    src={image!}
                    alt={name}
                    width={80}
                    height={80} />
                <h2 className="font-bold">{name}</h2>
                <p className="text-sm">(Quantidade: {quantity})</p>
                <p className="text-sm">R$ {price.toFixed(2)}</p>
            </div>
            <div className="flex items-center">
                <button className="text-red-600 text-2xl"><MdDeleteForever /></button>
            </div>
        </div>
    )
}