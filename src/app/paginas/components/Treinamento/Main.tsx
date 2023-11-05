"use client"
import { useEffect, useState } from "react";
import SearchBar from "../SoftStore/SearchBar";
import TreinoSection from "./treinoSection";
import ITreinamento from "@/app/Models/ITreinamento";
import FetchTreinamentoData from "@/app/hooks/useTreinamentoData";

export default function Main() {

    const [Data, setData] = useState<ITreinamento[] | null>(null)
    const [SecondaryData, setSecondaryData] = useState<ITreinamento[] | null>(null)

    useEffect(() => {

        const fetchData = async () =>{
       
        try {
            const dados = await FetchTreinamentoData()
            setData(dados)         
            setSecondaryData(dados)         
        }
        catch {
            console.log("Deu erro")
        }
    }
    fetchData()
    },[])

    function handleTextChange (event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        const resultado = Data?.filter(x => x.Nome.includes(event.target.value))
        setSecondaryData(resultado ? resultado : null)
      };


    return(
        <div className="h-full w-full flex flex-col gap-6 text-[0.8rem] md:text-[0.6rem] 2xl:text-[0.8rem]">
            <h1 className="text-[white] text-[1.5rem] font-bold">
                Treinamento
            </h1>
            <SearchBar TextChange={handleTextChange}/>
           <TreinoSection Data={SecondaryData}/>
        </div>
    )
}