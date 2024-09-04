import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
interface ProductParams {
    productImage: string
    productName: string
    productDescription: string
    productPrice: string
}

export default function Product({ productImage, productName, productDescription, productPrice }: ProductParams) {
    return (

        // CONTAINER DO PRODUTO

        <div className="flex items-center gap-4 rounded bg-gray-100 shadow-inner">

            {/* IMAGEM DO PRODUTO */}

                <Image
                className="rounded-md hover:scale-105 hover:-rotate-2 duration-300"
                src={productImage}
                alt={productName}
                width={150}
                height={150}/>

            <div className="w-full">

                {/* NOME DO PRODUTO */}

                <p className="font-bold">{productName}</p>

                {/* DESCRIÇÃO DO PRODUTO */}

                <p className="text-sm">{productDescription}</p>

                <div className="flex items-center gap-2 justify-between mt-3 pr-3">

                    {/* PREÇO DO PRODUTO */}

                    <p className="font-bold text-lg">R$ {productPrice}</p>

                    {/* BOTÃO DE ADICIONAR PRODUTO AO CARRINHO */}

                    <button className="bg-gray-900 px-5 rounded add-to-cart-btn"
                        data-name={productName}
                        data-price={productPrice}>
                        <FaCartPlus className="text-2xl text-white py-1" />
                    </button>

                </div>

            </div>

        </div>
    )
}