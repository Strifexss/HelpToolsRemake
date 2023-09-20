import FiltroItem from "./FiltrosItem";

export default function Filtros() {
    return(
        <section className="w-full min-h-[15rem] bg-padraoCinzaC rounded-xl flex flex-row ">
            <div className="w-[1.5rem] h-full bg-dourado rounded-s-xl">

            </div>
            <div className="flex flex-col w-full h-full p-4 px-6 gap-2">
                <FiltroItem TextoPrincipal="Qual Segmento Irá Atender Hoje?"/>
                <FiltroItem TextoPrincipal="Qual o Seu Estado(UF)?"/>
                <FiltroItem TextoPrincipal="Qual a Sua Cidade?"/>
                <section className="w-full h-full flex justify-center items-center">
                    <button className="bg-dourado hover:bg-amareloPadrao w-[10rem] h-[2rem] transition-[0.1s] ">
                        <h1 className="font-semibold text-[white]">
                            Aplicar Filtros
                        </h1>
                    </button>
                </section>
            </div>
         </section>
    )
}