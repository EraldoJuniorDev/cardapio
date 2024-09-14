import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../../app/data/cartList/cart";

export interface ProductProps {
  id?: number;
  image?: string;
  name: string;
  description: string;
  price: number;
  quantity?: number;
}

const Product: React.FC<ProductProps> = ({ id, image, name, description, price, quantity }: ProductProps) => {

  const handleCartItem = (ev: any) => {
    const parentButton = ev.target.closest(".add-to-cart-btn")

    if (parentButton) {
      const name = parentButton.getAttribute("data-name");
      const price = parseFloat(parentButton.getAttribute("data-price"));

      const existingItem = Cart.find(item => item.name === name)

      if (existingItem) {
        existingItem.quantity += 1;
      }

      else{Cart.push(
        { image, name, price, quantity: 1 })
      console.log(Cart)}
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
      <div className="w-full flex flex-col gap-3">

        {/* NOME DO PRODUTO */}
        <p className="font-bold text-sm lg:text-base">{name}</p>

        {/* DESCRIÇÃO DO PRODUTO */}
        <p className="text-xs text-balance lg:text-sm">{description}</p>

        <div className="flex items-center gap-2 justify-between mt-3 pr-3">

          {/* PREÇO DO PRODUTO */}
          <p className="font-bold text-sm lg:text-base">R$ {price.toFixed(2)}</p>

          {/* BOTÃO DE ADICIONAR PRODUTO AO CARRINHO */}
          <button
            onClick={handleCartItem}
            className="bg-gray-900 px-5 rounded add-to-cart-btn"
            data-name={name}
            data-price={price}
          >
            <FaCartPlus className="text-xl lg:text-2xl text-white py-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;