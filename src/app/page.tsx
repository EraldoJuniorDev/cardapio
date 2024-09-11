import Foods from "../components/Products/Foods";
import Drinks from "../components/Products/Drinks";
import { BeersData, BurgersData, PizzasData, SodasData } from '../app/data/index';

export default function Home() {

  return (
    <>
      {/* CONTAINER DOS HAMBÚRGUERES */}
      <h3 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Hambúgueres:</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl px-2 mb-16">

        {/* RENDERIZAÇÃO DO ARRAY DOS HAMBÚRGUERES */}
        {
          BurgersData
            .map((burger) => (
              <Foods key={burger.id} food={burger} />
            ))
        }
      </div>

      {/* CONTAINER DAS PIZZAS */}
      <h3 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Pizzas:</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl px-2 mb-16">

        {/* RENDERIZAÇÃO DO ARRAY DAS PIZZAS */}
        {
          PizzasData
            .map((pizza) => (
              <Foods key={pizza.id} food={pizza} />
            ))
        }
      </div>

      {/* CONTAINER DAS CERVEJAS */}
      <h2 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Cervejas:</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 sm:grid-y-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 mx-auto max-w-7xl px-2 mb-16" id="menu">

        {/* RENDERIZAÇÃO DO ARRAY DAS CERVEJAS */}
        {
          BeersData
            .map((beer) => (
              <Drinks key={beer.id} drink={beer} />
            ))
        }
      </div>

      {/* CONTAINER DOS REFRIGERANTES */}
      <h2 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Refrigerantes:</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-y-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 mx-auto max-w-7xl px-2 mb-16" id="menu">

        {/* RENDERIZAÇÃO DO ARRAY DOS REFRIGERANTES */}
        {
          SodasData
            .map((soda) => (
              <Drinks key={soda.id} drink={soda} />
            ))
        }
      </div>
    </>
  );
}