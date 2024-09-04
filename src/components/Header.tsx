import Image from "next/image"

export default function Header() {
    return (
        <header className="w-full h-[420px] bg-home bg-cover bg-center">

            <div className="w-full h-full flex flex-col justify-center items-center">
                
                <Image
                    className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
                    src="/images/logo.png"
                    alt="Logo Guaxuma's Burguer"
                    width={200}
                    height={200} />

                <h1 className="text-4x1 mt-4 mb-2 font-bold text-white">
                    Guaxuma&apos;s Burguer
                </h1>

                <span className="text-white font-medium">
                    Rua C-54, Avenida Guaxuma - Benedito Bentes - AL
                </span>

                <div className="bg-green-600 px-4 py-1 rounded-lg mt-5 font-bold" id="date-span">
                    <span className="text-white font-medium">
                        Seg á Dom - 18:00 as 22:00
                    </span>
                </div>

            </div>

        </header>
    )
}