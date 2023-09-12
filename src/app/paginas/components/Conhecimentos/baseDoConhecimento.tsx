import BaseDoConhecimentoItems from "./BasedoConhecimentoItems"
import ItemsSectionBaseDoConhecimento from "./ItemsSectionBaseDoConhecimento"

export default function BaseDoConhecimento() {
    return(
        <div className="w-full md:w-[30%] h-[200rem] md:h-full flex flex-col bg-padraoCinzaSC overflow-y-scroll scrollbar-hide">
            <section className="w-full h-[5rem] bg-dourado flex justify-center items-center">
                <h1 className="text-[white] text-[1.2rem] font-semibold">
                    Base do Conhecimento
                </h1>
            </section>
            <ItemsSectionBaseDoConhecimento/>
        </div>
    )
}