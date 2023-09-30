"use client"
import { useEffect, useState } from "react";
import Filtros from "./Filtros";
import WrapperTextos from "./WrapperTextos";
import axios from "axios";
import { url } from "@/app/FakeApi's/ApiSuporteComercial";
import ISuporteComercial from "@/app/Models/ISuporteComercial";
import useSuporteComercialData from "@/app/hooks/useSuporteComercialData";

export default function Main() {

    const [dataSegmentosPrimary, setDataSegmentosPrimary] = useState<ISuporteComercial[] | null>(null)
    const [dataSegmentosSecondary, setDataSegmentosSecondary] = useState<ISuporteComercial[] | null>(null)
    
    useEffect(() => {
        const FetchData = async() => {
            try {
                const apiData = await useSuporteComercialData()
                console.log(apiData)
                setDataSegmentosPrimary(apiData)
                setDataSegmentosSecondary(apiData)
            }
            catch(error) {
                console.error(error)
            }
        }

        FetchData()
    }, [])

    return(
        <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll scrollbar-hide">
            <section className="w-full flex items-center justify-start ">
                <h1 className="text-[white] font-bold text-[1.5rem]">
                    Help Comercial - Sistema de Apoio Comercial
                </h1>
            </section>
            <Filtros OpcoesSegmentoPrimary={dataSegmentosPrimary} setSegmentos={setDataSegmentosSecondary}/>
            <WrapperTextos Conteudo={dataSegmentosSecondary && dataSegmentosSecondary[0].PontosFortes} Titulo="Pontos Fortes"/>
            <WrapperTextos Conteudo={dataSegmentosSecondary && dataSegmentosSecondary[0].RoteiroDemo} Titulo="Roteiro Demo"/>
            <WrapperTextos Conteudo={dataSegmentosSecondary && dataSegmentosSecondary[0].MaterialDeApoio} Titulo="Material de Apoio"/>
        </div>
    )
}