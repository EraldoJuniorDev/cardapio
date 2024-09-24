'use client'

import { useEffect, useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { TbMessageReportFilled } from "react-icons/tb";

interface ModalProps {
    isOpen?: boolean;
}

function checkRestaurantOpen() {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora < 22;
}

export default function StatusModal(isOpen : ModalProps) {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const [isRestaurantOpen, setIsRestaurantOpen] = useState(checkRestaurantOpen());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsRestaurantOpen(checkRestaurantOpen());
        }, 60000);

        return () => clearInterval(intervalId);
    }, [])

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!isRestaurantOpen) {

        return (

            <>
                {isModalOpen && (
                    <div className=" w-full h-full fixed z-[99] flex items-center justify-center">

                        {/* OVERLAY DO MODAL */}
                        <div className="bg-[#ff08087a] w-[100vw] h-[100vh] fixed"></div>

                        {/* CONTAINER DO MODAL */}
                        <div className="bg-white h-2/4 flex items-center justify-between flex-col gap-1 pb-12 rounded-3xl min-w-[90%] md:min-w-[600px] absolute">

                            {/* CABEÇALHO DO MODAL */}
                            <div className="bg-[#ff0808f3] p-[2px] text-white border-b-2 border-gray-200 rounded-t-3xl flex items-center justify-center w-full">

                                <TbMessageReportFilled className="text-2xl py-1" />

                                <h2 className="text-center font-bold text-base m-3">Mensagem</h2>

                            </div>

                            {/* CONTEÚDO DO MODAL */}
                            <div className="flex items-center justify-center flex-col">

                                <h1 className="font-bold text-lg">Shhh... segredo!</h1>

                                <p>A gente tá fechado agora, mas seu pedido favorito já pode estar te esperando.</p>

                                <ul className="list-disc">

                                    <li>Sem filas</li>

                                    <li>Comida quentinha</li>

                                    <li>Descontos exclusivos</li>

                                </ul>

                                <h3>Agende agora e retire no <span className="font-bold">horário que quiser</span>.</h3>

                            </div>

                            <button
                                onClick={closeModal}
                                className="text-white flex items-center gap-2 bg-red-600 p-2 rounded">
                                <span>Ir para Agendamento</span>
                                <IoCalendarOutline />
                            </button>

                        </div>

                    </div>
                )}
            </>

        );
    }

}