"use client"
import { useEffect, useState } from "react"
import SearchBar from "../SoftStore/SearchBar"
import BaseDoConhecimento from "./baseDoConhecimento"
import WrapperMaisUtilizados from "./wrapperMaisUtilizados"
import IConhecimentos from "@/app/Models/IConhecimentos"
import FetchConhecimentosData from "@/app/hooks/Conhecimento/useConhecimentosData"
import ButtonDownload from "../Donwloads/ButtonDownloads"
import useClearFitlerBaseConhecimento from "@/app/hooks/Conhecimento/useClearFilterBaseConhecimento"

export default function Main() {

    const [DataPrimary, setDataPrimary] = useState<IConhecimentos[] | null>(null)
    const [DataSecondary, setDataSecondary] = useState<IConhecimentos[] |null>(null)

    function handleTextChange (event: React.ChangeEvent<HTMLInputElement>) {
      console.log(event.target.value)
      const resultado = DataPrimary?.filter(x => x.Titulo.includes(event.target.value))
      setDataSecondary(resultado ? resultado : null)
    };
     

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiData = await FetchConhecimentosData();
            setDataPrimary(apiData);
            setDataSecondary(apiData)
            console.log(apiData);
          } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
          }
        };
    
        fetchData();
      }, []);

      const LimparFiltro = () => useClearFitlerBaseConhecimento({ DataPrimary ,setDataSecondary})

    return(
        <div className="w-full h-full flex flex-col gap-6 overflow-y-scroll scrollbar-hide text-[0.8rem] md:text-[0.6rem] 2xl:text-[0.8rem]">
            <h1 className="text-[white] font-bold text-[1.5rem]">
              Conhecimentos
            </h1>
            <section className="w-full flex-col gap-2 flex md:flex-row justify-between items-center">
              <SearchBar TextChange={handleTextChange}/>
              <ButtonDownload Conteudo="Limpar Filtro" click={LimparFiltro}/>
            </section>
            <section className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
                <WrapperMaisUtilizados DataSecondary={DataSecondary}/>
                <BaseDoConhecimento PrimaryData={DataPrimary} SecondaryData={DataSecondary} setDataSecondary={setDataSecondary}/>
            </section>
        </div>
    )
}