import Foods from "../components/Products/Foods";
import Drinks from "../components/Products/Drinks";
import BurgersData from "../app/data//productsData/burgersInfo.json";
import PizzasData from "../app/data//productsData/pizzasInfo.json";
import SodasData from "../app/data//productsData/sodasInfo.json";
import BeersData from "../app/data/productsData/beersInfo.json";

export default function Home() {
  const burgers = BurgersData.filter((burger) => burger.id);
  const pizzas = PizzasData.filter((pizza) => pizza.id);
  const sodas = SodasData.filter((soda) => soda.id);
  const beers = BeersData.filter((beer) => beer.id);

  return (
    <>
       {/* CONTAINER DOS HAMBÚRGUERES */}
      <h3 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Hambúgueres:</h3>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl px-2 mb-16">
        {burgers.map((burger) => (
          <Foods key={burger.id} food={burger} />
        ))}
      </main>

      {/* CONTAINER DAS PIZZAS */}
      <h3 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Pizzas:</h3>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl px-2 mb-16">
        {pizzas.map((pizza) => (
          <Foods key={pizza.id} food={pizza} />
        ))}
      </main>

        {/* CONTAINER DAS CERVEJAS */}
      <h2 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Cervejas:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-y-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 mx-auto max-w-7xl px-2 mb-16" id="menu">
        {beers.map((beer) => (
          <Drinks key={beer.id} drink={beer} />
        ))}
      </div>

      {/* CONTAINER DOS REFRIGERANTES */}
      <h2 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Refrigerantes:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-y-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 mx-auto max-w-7xl px-2 mb-16" id="menu">
        {sodas.map((soda) => (
          <Drinks key={soda.id} drink={soda} />
        ))}
      </div>
    </>
  );
}