"use client"
import { useState } from "react";
import BaseDoConhecimentoItems from "./BasedoConhecimentoItems";

interface PropsItems {
    Nome: string,
    Conteudo: string[]
}

const Items:PropsItems[] = [{
    Nome: "Area Cliente",
    Conteudo: ["Teste1", "Teste2"],
},{
    Nome: "Area Cliente",
    Conteudo: ["Teste1", "Teste2"],
}]


export default function ItemsSectionBaseDoConhecimento() {


    return(

        <div className="w-full h-full">
            {
                Items.map(x => {
                    return(
                        <BaseDoConhecimentoItems key={x.Nome} Nome={x.Nome} Conteudo={x.Conteudo}/>
                    )
                })
            }
        </div>
        )
}