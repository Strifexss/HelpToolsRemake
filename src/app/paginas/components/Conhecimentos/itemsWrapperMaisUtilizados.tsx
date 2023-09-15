"use client"

import { RotaConhecimentosConteudo } from "@/app/hooks/useRotas"
interface Props {
    Id: string,
    Conteudo: string,
}

export default function ItemsWrapperMaisUtilizados({Id, Conteudo}:Props) {

    const Rota = RotaConhecimentosConteudo(Id)

    return(
        <div onClick={() => Rota()} 
            className="overflow-hidden w-full h-[5rem] bg-padraoCinzaC hover:bg-padraoCinzaE transition-[0.1s] cursor-pointer flex items-center justify-start gap-20 px-8">
        <h1 className="text-[white] font-semibold">
            {Id}
        </h1>
        <h1 className="text-[white] font-semibold">
            {Conteudo}
        </h1>
    </div>
    )
}