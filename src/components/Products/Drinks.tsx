import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../../app/data/cartList/cart";

export interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
  quantity: number;
}

function HandleId(id: number): number {
  return id;
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

      // Find existing item based on name and type
      const existingItem = Cart.find(item => item.name === name && item.type === type);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity for existing item
      } else {
        // Create a new item with a unique identifier based on name and type
        const uniqueId = `${name}-${type}-${Date.now()}`;
        const uniqueIdString = parseFloat(uniqueId);// Combine name, type, and timestamp
        Cart.push({
          id: uniqueIdString,
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
          <div className="w-full flex flex-col gap-12">
            {/* NOME DO PRODUTO */}
            <p className="font-bold text-sm">{name} ({type})</p>

            <div className="flex items-center gap-2 justify-between mt-3 pr-3">
              {/* PREÇO DO PRODUTO */}
              <p className="font-bold text-sm">{price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}</p>

              {/* BOTÃO DE ADICIONAR PRODUTO AO CARRINHO */}
              <button
                onClick={handleCartItem}
                className="bg-green-600 px-2 rounded add-to-cart-btn"
                data-name={name}
                data-price={price}
              >
                <FaCartPlus className="text-xl lg:text-2xl text-white py-1" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center text-center ">
            {/* NOME DO PRODUTO */}
            <p className="w-32 font-bold text-sm flex items-center justify-center text-center">{name} ({type})</p>

            <div className="w-full flex flex-col gap-2 justify-between mt-3 pr-3 sm:justify-center">

              {/* PREÇO DO PRODUTO */}
              <p className="font-bold text-sm">{price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}</p>
              <p className="text-white text-sm bg-[#BF0404] py-1 px-2 rounded">Indisponível</p>
            </div>

          </div>
        )}

    </div>
  );
};

export default Product;