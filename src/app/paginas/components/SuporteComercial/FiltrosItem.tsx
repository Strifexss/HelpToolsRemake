import ISuporteComercial from "@/app/Models/ISuporteComercial";
import { useState } from "react";

interface Regiao {
        Estado: string,
        Cidades: string[]
}

interface Props {
    Tipo?: "Segmento" | "Regiao" | "Cidades"
    TextoPrincipal: string,
    Opcoes?: string[] | null,
    OpcoesRegiao?: Regiao[],
    OpcoesSegmentoPrimary?: ISuporteComercial[] | null,
    OpcoesSegmentoSecondary?: ISuporteComercial[] | null,
    setCidade?: React.Dispatch<React.SetStateAction<string[] | null>>;
    setSegmentos?: React.Dispatch<React.SetStateAction<ISuporteComercial[] | null>>;
}

export default function FiltroItem({OpcoesSegmentoPrimary, setSegmentos, TextoPrincipal, Opcoes, Tipo, OpcoesRegiao, setCidade}:Props) {

    function handleTextosChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedTexto = event.target.value
        console.log(selectedTexto)
        console.log(OpcoesSegmentoPrimary)
        const segmentosFiltrados = 
            OpcoesSegmentoPrimary?.filter(Segmento => Segmento.Segmento === selectedTexto) || []
            console.log(segmentosFiltrados)
    
        if (setSegmentos) {
            setSegmentos(segmentosFiltrados)
        }
    }

    function handleRegiaoChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedRegiao = event.target.value;

        console.log(selectedRegiao)
        
        const cidadesFiltradas =
          OpcoesRegiao?.find((item) => item.Estado === selectedRegiao)?.Cidades || [];
        console.log(cidadesFiltradas)

        console.log(setCidade)
        if (setCidade) {
          setCidade(cidadesFiltradas);
        }
      }

    return(
        <section className="h-full flex flex-col md:grid grid-cols-3 p-2 md:px-2  justify-items-center items-start md:items-center gap-4 bg-padraoCinzaSC rounded-md">
        <h1 className="text-[white] font-semibold">
            {TextoPrincipal}
        </h1>
        <section>
            <select onChange={Tipo == "Regiao" ? handleRegiaoChange : handleTextosChange} className="w-[10rem] bg-padraoCinzaC text-[white] font-semibold p-1">
                {   Tipo === "Segmento" || Tipo === "Cidades"?
                    Opcoes?.map(Opcoes => {
                        return(
                            <option key={Opcoes}
                             value={Opcoes}
                             >
                                {Opcoes}
                            </option>
                        )
                    })
                    :
                    OpcoesRegiao?.map(Opcoes => {
                        return(
                            <option key={Opcoes.Estado}
                             value={Opcoes.Estado}
                             >
                                {Opcoes.Estado}
                            </option>
                        )
                    })
                }
            </select>
        </section>
        <h1 className="text-dourado font-semibold">
            Neste Segmento hoje nós temos: 655 Clientes
        </h1>
    </section>
    )
}