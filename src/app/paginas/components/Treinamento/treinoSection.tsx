import { useEffect, useState } from "react";
import ItemsTreinoSection from "./ItemsTreinoSection";
import FetchTreinamentoData from "@/app/hooks/useTreinamentoData";
import ITreinamento from "@/app/Models/ITreinamento";

interface Props {
    Data: ITreinamento[] | null
}

export default function TreinoSection({Data}:Props) {
    

    return(
        <div className="w-full h-[80%] bg-padraoCinzaSC flex flex-col">
        <div className="w-full h-[5rem] bg-dourado flex justify-center items-center">
            <h1 className="text-[white] text-[1rem] font-bold">
                Treinamentos
            </h1>
        </div>
        <div className="w-full h-full overflow-y-scroll scrollbar-hide">
            {Data?.map(x => {
                return(
                    <ItemsTreinoSection key={x.Nome} Nome={x.Nome} conteudo={x.conteudo}/>
                )
            })
            }
        </div>
    </div>
    )
}