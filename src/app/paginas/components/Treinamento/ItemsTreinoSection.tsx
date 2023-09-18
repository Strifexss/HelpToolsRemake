"use client"
import { Video } from "lucide-react"
import { useState } from "react"

interface Props {
    nome: string,
    conteudo: string[]
}

export default function ItemsTreinoSection({conteudo,nome}:Props) {

    const [Options, setOptions] = useState(false)

    return(
        <div className="flex flex-col">
            <section onClick={() => setOptions(!Options)} 
            className="flex px-8 w-full h-[5rem] bg-padraoCinzaC hover:bg-padraoCinzaE cursor-pointer">
                <div className="flex flex-row gap-4 items-center">
                    <Video color="white"/>
                    <h1 className="text-[white] font-semibold">
                        {nome}
                    </h1>
                </div>
            </section>
            {
                Options &&
                conteudo.map(x => {
                    return(
                    <div key={x} className="w-full h-[5rem] cursor-pointer bg-dourado hover:bg-amareloPadrao flex px-8 justify-start items-center">
                        <h1 className="text-[white] font-semibold">
                            {x}
                        </h1>
                    </div>
                    )
                })
                
            }
        </div>
    )
}