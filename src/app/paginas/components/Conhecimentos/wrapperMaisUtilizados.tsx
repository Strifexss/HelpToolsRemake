"use client"
import { Star } from "lucide-react";
import ItemsWrapperMaisUtilizados from "./itemsWrapperMaisUtilizados";
import IConhecimentos from "@/app/Models/IConhecimentos";
import FetchConhecimentosData from "@/app/hooks/useConhecimentosData";
import { useState, useEffect } from "react";
export default function WrapperMaisUtilizados() {

    const [Data, setData] = useState<IConhecimentos[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiData = await FetchConhecimentosData();
            setData(apiData);
            console.log(apiData);
          } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
          }
        };
    
        fetchData();
      }, []);


    return(
        <div className="w-full md:w-[70%] h-[200rem] md:h-full bg-padraoCinzaSC flex flex-col overflow-hidden">
                <div className="bg-dourado w-full h-[5rem] px-8 flex justify-start items-center gap-4">
                    <Star color="white" fill="white"/>
                    <h1 className="text-[white] font-semibold text-[1.5rem]">
                        Mais utilizados
                    </h1>
                </div>
                {
                Data?.map(x => {
                    return(
                        <ItemsWrapperMaisUtilizados key={x.Faq} Conteudo={x.Titulo} Id={x.Faq}/>
                    )
                })
                }
        </div>
    )
}