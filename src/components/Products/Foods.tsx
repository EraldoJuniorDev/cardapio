import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";

interface ProductProps {
  food: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ food }) => {
  const { id, image, name, description, price } = food;

  return (
    <div className="flex items-center rounded bg-gray-100 shadow-inner">
      
      {/* IMAGEM DO PRODUTO */}
      <Image
        className="rounded hover:scale-105 hover:-rotate-2 duration-300 m-3"
        src={image}
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
            className="bg-gray-900 px-5 rounded add-to-cart-btn"
            data-name={name}
            data-price={price.toFixed(2)}
          >
            <FaCartPlus className="text-xl lg:text-2xl text-white py-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;