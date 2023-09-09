"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import IConhecimentos from "@/app/Models/IConhecimentos"
import FetchConhecimentosData from "@/app/hooks/useConhecimentosData"
export default function Conteudo() {

    const [Data, setData] = useState<IConhecimentos | null>(null)
    const parametros = useParams()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiData = await FetchConhecimentosData();
            const conhecimentoEncontrado = apiData.find(x => x.Faq === parametros.id);
            
            if (conhecimentoEncontrado !== undefined) {
              setData(conhecimentoEncontrado);
            } else {
              setData(null);
            }
            
            console.log(apiData);
          } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
          }
        };
    
        fetchData();
      }, [parametros.id]);

      console.log(parametros.id);

    
    return(
        <div>
            <div className="text-[white]"  
            key={Data?.Faq}>
                <h1>{Data?.Texto.paragrafo1}</h1>
                <h1>{Data?.Texto.paragrafo2}</h1>
                <h1>{Data?.Texto.paragrafo3}</h1>
                <h1>{Data?.Texto.paragrafo4}</h1>
            </div>
              
          
        </div>
    )
}