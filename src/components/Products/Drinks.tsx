import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../../app/data/cartList/cart";
import { IoCalendarOutline } from "react-icons/io5";
import { toast } from "@/hooks/use-toast";

export interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
  quantity: number;
}

function checkRestaurantOpen() {
  const data = new Date();
  const hora = data.getHours();
  return hora >= 18 && hora < 22;
}

const Product: React.FC<ProductProps> = ({ id, image, name, price, type }: ProductProps) => {

  const [isOpen, setIsOpen] = useState(checkRestaurantOpen());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsOpen(checkRestaurantOpen());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCartItem = (ev: any) => {
    const parentButton = ev.target.closest(".add-to-cart-btn");

    if (parentButton) {
      const name = parentButton.getAttribute("data-name");
      const price = parseFloat(parentButton.getAttribute("data-price"));

      const existingItem = Cart.find(item => item.name === name && item.type === type);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {

        Cart.push({
          id,
          name,
          price,
          quantity: 1,
          image,
          type,
        });
      }
      console.log(Cart);
    }
  };

  return (
    <div className="w-full xl:w-72 flex items-center rounded bg-gray-100 shadow-inner">

      {/* IMAGEM DO PRODUTO */}
      <Image
        className="w-28 rounded hover:scale-105 hover:-rotate-2 duration-300 m-3"
        src={image!}
        alt={name}
        width={128}
        height={128}
      />

      {/* DETALHES DO PRODUTO */}

      {isOpen ? (
        <div className="w-full h-full flex flex-col justify-evenly">

          {/* NOME DO PRODUTO */}
          <p className="font-bold text-sm">{name} ({type})</p>

          <div className="w-full flex items-center gap-2 justify-between mt-3 pr-3">

            {/* PREÇO DO PRODUTO */}
            <p className="font-bold text-sm">{price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
            </p>

            {/* BOTÃO DE ADICIONAR PRODUTO AO CARRINHO */}
            <button
              onClick={() => {
                toast({
                  title: "Adicionado ao seu carinho com sucesso!",
                  description: (
                    <span>
                      Você adicionou <span className="font-bold text-green-600">{name}</span> de{" "}
                      <span className="font-bold text-green-600">{type}</span> ao seu carrinho.
                    </span>
                  ),
                })
              }}
            >

              <FaCartPlus
                onClick={handleCartItem}
                className="bg-green-600 px-2 w-full rounded add-to-cart-btn text-xl lg:text-2xl text-white py-1"
                data-name={name}
                data-price={price} />
            </button>

          </div>

        </div>

      ) : (
        <div className="w-full h-full flex flex-col justify-evenly">

          {/* NOME DO PRODUTO */}
          <p className="font-bold text-sm">{name} ({type})</p>

          <div className="w-full flex items-center gap-2 justify-between mt-3 pr-3">

            {/* PREÇO DO PRODUTO */}
            <p className="font-bold text-sm">{price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
            </p>

            {/* BOTÃO DE ADICIONAR PRODUTO AO CARRINHO */}
            <button
              onClick={() => {
                toast({
                  title: "Adicionado ao seu carinho com sucesso para Agendamento!",
                  description: (
                    <span>
                      Você adicionou <span className="font-bold  text-green-600">{name}</span> de{" "}
                      <span className="font-bold  text-green-600">{type}</span> ao seu carrinho.
                    </span>
                  ),
                })
              }}
            >

              <FaCartPlus
                onClick={handleCartItem}
                className="bg-green-600 px-2 w-full rounded add-to-cart-btn text-xl lg:text-2xl text-white py-1"
                data-name={name}
                data-price={price} />
            </button>

          </div>

        </div>

      )}

    </div>

  );

};

export default Product;