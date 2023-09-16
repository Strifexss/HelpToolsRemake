"use client"
import { useEffect, useState } from "react";
import BaseDoConhecimentoItems from "./BasedoConhecimentoItems";
import useBaseConhecimentoData from "@/app/hooks/Conhecimento/useBaseConhecimentoData";
import IBaseConhecimento from "@/app/Models/IBaseConhecimento";
import IConhecimentos from "@/app/Models/IConhecimentos";

interface Props {
    SecondaryData: IConhecimentos[] | null,
    PrimaryData: IConhecimentos[] | null,
    setDataSecondary: React.Dispatch<React.SetStateAction<IConhecimentos[] | null>>;
}

export default function ItemsSectionBaseDoConhecimento({setDataSecondary, SecondaryData, PrimaryData}:Props) {

    const [data, setData] = useState<IBaseConhecimento[] | null>(null)

    useEffect(() => {

        function LoadingData() {
 
        try {
            useBaseConhecimentoData().then(result => {
                setData(result)
            })
        }
        catch {
            console.log("Não foi possivel carregar os dados")
        }
    }
    LoadingData()
    },[])

    return(

        <div className="w-full h-full overflow-y-scroll scrollbar-hide">
            {
                data?.map(x => {
                    return(
                        <BaseDoConhecimentoItems PrimaryData={PrimaryData} SecondaryData={SecondaryData} setDataSecondary={setDataSecondary} key={x.Grupo} Grupo={x.Grupo} Conteudo={x.SubGrupo}/>
                    )
                })
            }
        </div>
        )
}