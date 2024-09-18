'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { PiClockCountdownBold } from "react-icons/pi";

function checkRestaurantOpen() {
  const data = new Date();
  const hora = data.getHours();
  return hora >= 18 && hora < 22;
}

export default function Header() {

  const [isOpen, setIsOpen] = useState(checkRestaurantOpen());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsOpen(checkRestaurantOpen());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (

    <header className="w-full h-[420px] bg-home bg-cover bg-center">

      <div className="w-full h-full flex flex-col justify-center items-center gap-4">

        {/* LOGO DO SITE */}
        <Image
          className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
          src="/images/logo.png"
          alt="Logo Guaxuma's Burguer"
          width={200}
          height={200}
        />

        {/* NOME DO SITE */}
        <h1 className="text-3xl font-bold text-white">
          Guaxuma&apos;s Burguer
        </h1>

        {/* LOCALIZAÇÃO DA LOJA */}
        <span className="text-base text-white text-center font-medium">
          Rua C-54, Avenida Guaxuma - Benedito Bentes - AL
        </span>

        {/* STATUS DE HORÁRIO DE FUNCIONAMENTO DO SITE */}
        <div className={"rounded-xl py-1 px-2"}>

          <span className="text-base text-white font-medium">
            Seg á Dom - 18:00 as 22:00
          </span>

        </div>

        <div>

          {isOpen ? (
            <span className="text-white bg-green-600 py-1 px-2 rounded">Aberto</span>
          ) : (
            <span className="text-white flex items-center gap-2 bg-[#BF0404] py-1 px-2 rounded">Fechado <PiClockCountdownBold /></span>
          )}

        </div>

        {/* Render Footer only if the restaurant is open */}
        {isOpen && <Footer />}
      </div>

    </header>

  );
  
}