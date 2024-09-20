import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../../app/data/cartList/cart";
import { IoCalendarOutline } from "react-icons/io5";
import { toast } from "@/hooks/use-toast";
import { FiCheckCircle } from "react-icons/fi";
import { Toaster } from "../ui/toaster";

export interface ProductProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  type: string;
}

function HandleId(id: number): number {
  return id;
}

function checkRestaurantOpen() {
  const data = new Date();
  const hora = data.getHours();
  return hora >= 18 && hora < 22;
}

const Product: React.FC<ProductProps> = ({ id, image, name, description, price, quantity, type }: ProductProps) => {

  const [isOpen, setIsOpen] = useState(checkRestaurantOpen());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsOpen(checkRestaurantOpen());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCartItem = (ev: any) => {
    const parentButton = ev.target.closest(".add-to-cart-btn")

    if (parentButton) {
      const name = parentButton.getAttribute("data-name");
      const price = parseFloat(parentButton.getAttribute("data-price"));

      const existingItem = Cart.find(item => item.id === id)

      if (existingItem) {
        toast({
          variant: "destructive",
          title: "Erro ao adicionar ao carrinho.",
          description: (
            <span>
              <span className="font-bold">{name}</span> já está no seu carrinho.
            </span>
          ),
        });
      } else {

        toast({
          title: "Adicionado ao carrinho.",
          description: (
            <span>
              <span className="font-bold">{name}</span> foi adicionado ao seu carrinho.
            </span>
          ),
        });

        Cart.push({
          id,
          image,
          name,
          price,
          type,
          quantity: 1
        });
      }
    }

  }

  return (
    <div className="flex items-center rounded bg-gray-100 shadow-inner">

      {/* IMAGEM DO PRODUTO */}
      <Image
        className="rounded hover:scale-105 hover:-rotate-2 duration-300 m-3"
        src={image!}
        alt={name}
        width={128}
        height={128}
      />

      {/* DETALHES DO PRODUTO */}
      <div className="w-full flex flex-col gap-1">

        {/* NOME DO PRODUTO */}
        <p className="font-bold text-sm">{name}</p>

        {/* RENDERIZA NOME E TIPO SE AMBOS EXISTIREM */}
        <p>
          {type && (
            <div className="flex items-center">
              <h2 className="w-24 sm:w-fit font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {name}
              </h2>
              <p className="text-xs">
                ({type})
              </p>
            </div>
          )}
        </p>

        {/* DESCRIÇÃO DO PRODUTO */}
        <p className="w-[90%] text-xs">{description}</p>

        <div className="flex items-center gap-2 justify-between mt-3 pr-3">

          {/* PREÇO DO PRODUTO */}
          <p className="font-bold text-sm">{price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>

          {/* BOTÃO DE ADICIONAR PRODUTO AO CARRINHO */}
          {isOpen ?

            // DETALHES DO PRODUTO SE O RESTAURENTE ESTIVER ABERTO
            (

              <button>

                <FaCartPlus
                  onClick={handleCartItem}
                  className="bg-green-600 px-2 w-full rounded add-to-cart-btn text-xl lg:text-2xl text-white py-1"
                  data-name={name}
                  data-price={price} />
                  
              </button>

            ) :

            // DETALHES DO PRODUTO SE O RESTAURENTE ESTIVER FECHADO
            (

              <button>

                <IoCalendarOutline
                  onClick={handleCartItem}
                  className="bg-[#BF0404] px-2 w-full rounded add-to-cart-btn text-xl lg:text-2xl text-white py-1"
                  data-name={name}
                  data-price={price} />

              </button>

            )}

        </div>

      </div>

    </div >

  );

};

export default Product;