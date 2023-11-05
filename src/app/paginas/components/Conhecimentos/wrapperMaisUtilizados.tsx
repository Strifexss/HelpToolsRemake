"use client"
import { Star } from "lucide-react";
import ItemsWrapperMaisUtilizados from "./itemsWrapperMaisUtilizados";
import IConhecimentos from "@/app/Models/IConhecimentos";
import FetchConhecimentosData from "@/app/hooks/Conhecimento/useConhecimentosData";
import { useState, useEffect } from "react";

interface Props {
  DataSecondary: IConhecimentos[] | null
}

export default function WrapperMaisUtilizados({DataSecondary}:Props) {

    return(
        <div className="w-full md:w-[70%] h-[300rem] md:h-full bg-padraoCinzaSC flex flex-col overflow-hidden text-[0.8rem] md:text-[0.6rem] 2xl:text-[0.8rem]">
                <div className="bg-dourado w-full h-[4rem] 2xl:min-h-[5rem] px-8 flex justify-start items-center gap-4">
                    <Star color="white" fill="white"/>
                    <h1 className="text-[white] font-semibold text-[1rem]">
                        Mais utilizados
                    </h1>
                </div>
                {
                DataSecondary?.map(x => {
                    return(
                        <ItemsWrapperMaisUtilizados key={x.Faq} Conteudo={x.Titulo} Id={x.Faq}/>
                    )
                })
                }
        </div>
    )
}