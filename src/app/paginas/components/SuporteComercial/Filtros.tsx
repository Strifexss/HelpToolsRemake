"use client"
import  { useState } from "react";
import FiltroItem from "./FiltrosItem";
import { Segmento, Regiao } from "./Opcoes";

export default function Filtros() {

    const [Cidades, setCidades] = useState<string[] | null>(null)

    return(
        <section className="w-full h-auto bg-padraoCinzaC rounded-xl flex flex-row ">
            <div className="w-[1.5rem] h-full bg-dourado rounded-s-xl">

            </div>
            <div className="flex flex-col w-full h-full p-4 px-6 gap-2">
                <FiltroItem Tipo="Any" Opcoes={Segmento} TextoPrincipal="Qual Segmento Irá Atender Hoje?"/>
                <FiltroItem setCidade={setCidades} Tipo="Regiao" OpcoesRegiao={Regiao} TextoPrincipal="Qual o Seu Estado(UF)?"/>
                <FiltroItem Tipo="Any" Opcoes={Cidades} TextoPrincipal="Qual a Sua Cidade?"/>
                <section className="w-full h-full flex justify-center items-center">
                    <button className="bg-dourado hover:bg-amareloPadrao w-[10rem] h-[2rem] transition-[0.1s] ">
                        <h1 className="font-semibold text-[white]">
                            Aplicar Filtros
                        </h1>
                    </button>
                </section>
            </div>
         </section>
    )
}