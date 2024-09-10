import Foods from "../components/Products/Foods";
import Drinks from "../components/Products/Drinks";
import FoodsData from "../app/data/foodsInfo.json";
import DrinksData from "../app/data/drinksInfo.json";

export default function Home() {
  const burgers = FoodsData.filter((product) => product.id);
  const drinks = DrinksData.filter((product) => product.id);

  return (
    <>
      {/* Burgers */}
      <h2 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">
        Conheça nosso Menu
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl px-2 mb-16">
        {burgers.map((product) => (
          <Foods key={product.id} product={product} />
        ))}
      </main>

      {/* Drinks */}
      <h2 className="text-xl md:text-2xl font-bold text-center mt-9 mb-6">Bebidas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto max-w-7xl px-2 mb-16" id="menu">
        {drinks.map((product) => (
          <Drinks key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}