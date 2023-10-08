"use client"
import  { useState } from "react";
import FiltroItem from "./FiltrosItem";
import { Segmento, Regiao } from "./Opcoes";
import ISuporteComercial from "@/app/Models/ISuporteComercial";

interface Props {
    OpcoesSegmentoPrimary: ISuporteComercial[] | null
    setSegmentos: React.Dispatch<React.SetStateAction<ISuporteComercial[] | null>>;
}


export default function Filtros({OpcoesSegmentoPrimary, setSegmentos}:Props) {

    const [Cidades, setCidades] = useState<string[] | null>(null)

    return(
        <section className="w-full h-auto bg-padraoCinzaC rounded-xl flex flex-row ">
            <div className="w-[1rem] md:w-[1.5rem] h-full bg-dourado rounded-s-xl">

            </div>
            <div className="flex flex-col w-full h-full py-6 px-6 gap-2">
                <FiltroItem TextoSegmento="Neste Segmento hoje nós temos: 1000 Clientes" OpcoesSegmentoPrimary={OpcoesSegmentoPrimary} setSegmentos={setSegmentos} Tipo="Segmento" Opcoes={Segmento} TextoPrincipal="Qual Segmento Irá Atender Hoje?"/>
                <FiltroItem TextoSegmento="Neste Segmento hoje nós temos: 500 Clientes" setCidade={setCidades} Tipo="Regiao" OpcoesRegiao={Regiao} TextoPrincipal="Qual o Seu Estado(UF)?"/>
                <FiltroItem TextoSegmento="Neste Segmento hoje nós temos: 250 Clientes" Tipo="Cidades" Opcoes={Cidades} TextoPrincipal="Qual a Sua Cidade?"/>
            </div>
         </section>
    )
}