import Product from "../components/Product";

export default function Home() {

  return (
    <>

      {/* CONTAINER DOS HAMBÚRGUERES */}

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
        Conheça nosso Menu
      </h2>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto max-w-7xl px-2 mb-16">

        {/* ITENS HAMBÚRGUER */}

        <Product
          productName="Bacon Cheeseburger"
          productImage={"/images/hamb-1.png"}
          productDescription="Pão com gergelim, dois hambúrgueres de carne, fatias de queijo, alface, bacon e um molho que parece ser maionese."
          productPrice="18.90" />

        <Product
          productName="Hamburguer Duplo"
          productImage={"/images/hamb-2.png"}
          productDescription="Dois hambúrgueres de carne com queijo derretido, fatias de bacon por cima, acompanhado de batatas fritas."
          productPrice="32.90" />

        <Product
          productName="Double Cheeseburger"
          productImage={"/images/hamb-3.png"}
          productDescription="Um hambúrguer simples com dois patties, queijo cheddar derretido e um molho branco."
          productPrice="32.90" />

        <Product
          productName="Crispy Chicken Delight Burger"
          productImage={"/images/hamb-4.png"}
          productDescription="Pão com gergilim, filé de frango crocante, queijo derretido, alface, fatias de tomate, anéis de cebola e picles."
          productPrice="32.90" />

        <Product
          productName="Classico Delight Burger"
          productImage={"/images/hamb-5.png"}
          productDescription="Pão com gergilim, alface crocante, fatias de tomate, queijo derretido e hambúrguer de carne bovina suculenta."
          productPrice="15.90" />

        <Product
          productName="Classico Deluxe Cheeseburger"
          productImage={"/images/hamb-6.png"}
          productDescription="Pão com gergelim, hambúrguer de carne bovina, queijo derretido, alface, fatias de tomate e anéis de cebola roxa."
          productPrice="30.90" />

        <Product
          productName="Chili Burger"
          productImage={"/images/hamb-7.png"}
          productDescription="Hambúrguer com molho de chili, queijo derretido e onion rings crocantes."
          productPrice="25.90" />

        <Product
          productName="Green Garden"
          productImage={"/images/hamb-8.png"}
          productDescription="Pão de hambúrguer dourado, hambúrguer vegano, alface, cebola roxa fatiada finamente e cenoura ralada."
          productPrice="22.90" />

      </main>

      {/* CONTAINER DAS BEBIDAS */}

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">Bebidas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto max-w-7xl px-2 mb-16" id="menu">

        {/* ITENS BEBIBA */}

        <Product
          productName="Coca-Cola Lata"
          productImage={"/images/refri-1.png"}
          productDescription=""
          productPrice="6.00" />
        
        <Product
          productName="Guaraná Lata"
          productImage={"/images/refri-2.png"}
          productDescription=""
          productPrice="6.00" />

      </div>

    </>

  );
}
