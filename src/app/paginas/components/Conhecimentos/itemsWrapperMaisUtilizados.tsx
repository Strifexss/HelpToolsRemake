"use client"
import IConhecimentos from "@/app/Models/IConhecimentos"
import FetchConhecimentosData from "@/app/hooks/Conhecimento/useConhecimentosData"
import { RotaConhecimentosConteudo } from "@/app/hooks/useRotas"
import { useEffect, useState } from "react"

interface Props {
    Id: number,
    Conteudo: string,
}

export default function ItemsWrapperMaisUtilizados({Id, Conteudo}:Props) {

    const Rota = RotaConhecimentosConteudo(Id)
 

    return(
        <div onClick={() => Rota()} 
            className="overflow-hidden w-full h-[5rem] text-[0.8rem] bg-padraoCinzaC hover:bg-padraoCinzaE transition-[0.1s] cursor-pointer flex items-center justify-start gap-20 px-8">
        <h1 className="text-[white] font-semibold">
            {Id}
        </h1>
        <h1 className="text-[white] font-semibold">
            {Conteudo}
        </h1>
    </div>
    )
}