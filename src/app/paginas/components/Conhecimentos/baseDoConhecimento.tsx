import IConhecimentos from "@/app/Models/IConhecimentos";
import BaseDoConhecimentoItems from "./BasedoConhecimentoItems"
import ItemsSectionBaseDoConhecimento from "./ItemsSectionBaseDoConhecimento"

interface Props {
    SecondaryData: IConhecimentos[] | null,
    PrimaryData: IConhecimentos[] | null,
    setDataSecondary: React.Dispatch<React.SetStateAction<IConhecimentos[] | null>>;
}


export default function BaseDoConhecimento({setDataSecondary, SecondaryData, PrimaryData}:Props) {
    return(
        <div className="w-full md:w-[40%] h-[200rem] md:h-full flex flex-col bg-padraoCinzaSC overflow-y-scroll scrollbar-hide">
            <section className="w-full h-[4rem] 2xl:min-h-[5rem] bg-dourado flex justify-center items-center">
                <h1 className="text-[white] text-[1rem] font-semibold">
                    Base do Conhecimento
                </h1>
            </section>
            <ItemsSectionBaseDoConhecimento PrimaryData={PrimaryData} SecondaryData={SecondaryData} setDataSecondary={setDataSecondary}/>
        </div>
    )
}