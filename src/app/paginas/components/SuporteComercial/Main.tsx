import Filtros from "./Filtros";
import WrapperTextos from "./WrapperTextos";

export default function Main() {

    return(
        <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll scrollbar-hide">
            <section className="w-full flex items-center justify-start ">
                <h1 className="text-[white] font-bold text-[1.5rem]">
                    Help Comercial - Sistema de Apoio Comercial
                </h1>
            </section>
            <Filtros/>
            <WrapperTextos Titulo="Pontos Fortes"/>
            <WrapperTextos Titulo="Roteiro Demo"/>
            <WrapperTextos Titulo="Material de Apoio"/>
        </div>
    )
}