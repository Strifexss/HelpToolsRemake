import { useState } from "react";

interface Regiao {
        Estado: string,
        Cidades: string[]
}

interface Props {
    Tipo: "Any" | "Regiao"
    TextoPrincipal: string,
    Opcoes?: string[] | null,
    OpcoesRegiao?: Regiao[],
    setCidade?: React.Dispatch<React.SetStateAction<string[] | null>>;
}

export default function FiltroItem({TextoPrincipal, Opcoes, Tipo, OpcoesRegiao, setCidade}:Props) {


    function handleRegiaoChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedRegiao = event.target.value;

        console.log(selectedRegiao)
        
        const cidadesFiltradas =
          OpcoesRegiao?.find((item) => item.Estado === selectedRegiao)?.Cidades || [];
        console.log(cidadesFiltradas)
        // Agora, mesmo que setCidade seja null, não haverá um erro
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
            <select onChange={handleRegiaoChange} className="w-[10rem] bg-padraoCinzaC text-[white] font-semibold p-1">
                {   Tipo === "Any"?
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