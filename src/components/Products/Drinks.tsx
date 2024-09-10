import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";

interface ProductProps {
  drink: {
    image: string;
    name: string;
    price: number;
    type: string;
  };
}

const Product: React.FC<ProductProps> = ({ drink }) => {
  const { image, name, price, type } = drink;

  return (
    <div className="w-full xl:w-72 flex items-center rounded bg-gray-100 shadow-inner">
      
      {/* IMAGEM DO PRODUTO */}
      <Image
        className="w-28 rounded hover:scale-105 hover:-rotate-2 duration-300 m-3"
        src={image}
        alt={name}
        width={128}
        height={128}
      />

      {/* DETALHES DO PRODUTO */}
      <div className="w-full flex flex-col gap-12">
        
        {/* NOME DO PRODUTO */}
        <p className="font-bold text-sm">{name} ({type})</p>

        <div className="flex items-center gap-2 justify-between mt-3 pr-3">
          
          {/* PREÇO DO PRODUTO */}
          <p className="font-bold text-sm">R$ {price.toFixed(2)}</p>

          {/* BOTÃO DE ADICIONAR PRODUTO AO CARRINHO */}
          <button
            className="bg-gray-900 px-2 rounded add-to-cart-btn"
            data-name={name}
            data-price={price.toFixed(2)}
          >
            <FaCartPlus className="text-xl  text-white py-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;