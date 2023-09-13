"use client"
import { useEffect, useState } from "react";
import BaseDoConhecimentoItems from "./BasedoConhecimentoItems";
import useBaseConhecimentoData from "@/app/hooks/useBaseConhecimentoData";
import IBaseConhecimento from "@/app/Models/IBaseConhecimento";


export default function ItemsSectionBaseDoConhecimento() {

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
                        <BaseDoConhecimentoItems key={x.Nome} Nome={x.Nome} Conteudo={x.Conteudo}/>
                    )
                })
            }
        </div>
        )
}