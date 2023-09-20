import Filtros from "./Filtros";

export default function Main() {
    return(
        <div className="w-full h-full flex flex-col gap-8">
            <section className="w-full flex items-center justify-start ">
                <h1 className="text-[white] font-bold text-[1.5rem]">
                    Help Comercial - Sistema de Apoio Comercial
                </h1>
            </section>
            <Filtros/>
        </div>
    )
}