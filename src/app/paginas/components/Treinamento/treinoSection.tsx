import { useEffect, useState } from "react";
import ItemsTreinoSection from "./ItemsTreinoSection";
import FetchTreinamentoData from "@/app/hooks/useTreinamentoData";
import ITreinamento from "@/app/Models/ITreinamento";
export default function TreinoSection() {
    
    const [Data, setData] = useState<ITreinamento[] | null>(null)

    useEffect(() => {

        const fetchData = async () =>{
       
        try {
            const dados = await FetchTreinamentoData()
            setData(dados)         
        }
        catch {
            console.log("Deu erro")
        }
    }
    fetchData()
    },[])

    return(
        <div className="w-full h-full bg-padraoCinzaSC flex flex-col">
        <div className="w-full h-[5rem] bg-dourado flex justify-center items-center">
            <h1 className="text-[white] text-[1.5rem] font-bold">
                Treinamentos
            </h1>
        </div>
        <div className="w-full h-full">
            {Data?.map(x => {
                return(
                    <ItemsTreinoSection key={x.Nome} nome={x.Nome} conteudo={x.conteudo}/>
                )
            })
            }
        </div>
    </div>
    )
}