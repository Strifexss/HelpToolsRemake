import Link from "next/link"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import IConhecimentos from "@/app/Models/IConhecimentos"
import Descricao from "./Descricao"
import FetchConhecimentosData from "@/app/hooks/Conhecimento/useConhecimentosData"
export default function Main() {

    const [Data, setData] = useState<IConhecimentos | null>(null)
    const parametros = useParams()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiData = await FetchConhecimentosData();
            const conhecimentoEncontrado = apiData.find(x => x.Faq === parseInt(parametros.id[0]));
            
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
        <div className="w-full h-auto md:h-full flex flex-col gap-8 text-[0.8rem]">
            <header className="w-full flex flex-row justify-start gap-2">
                <Link href={"/paginas/Conhecimentos"}>
                    <h1 className="text-[gray] hover:text-[white]">
                        Conhecimentos
                    </h1>
                </Link>
                <h1 className="text-[gray]">
                    -
                </h1>
                <h1 className="text-[gray] hover:text-[white] cursor-pointer">
                        {Data?.Faq}
                    </h1>
            </header>
            <section className="w-full flex gap-8 md:gap-44 justify-between flex-col md:flex-row">
                <h1 className="text-[white] font-bold">
                    {Data?.Titulo}
                </h1>
                <h1 className="text-[white] font-bold">
                   FAQ:<span className="text-dourado">{Data?.Faq}</span>
                </h1>
            </section>
            <Descricao Data={Data}/>
        </div>
    )
}