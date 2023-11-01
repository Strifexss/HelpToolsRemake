"use client"
import { Video } from "lucide-react"
import { useState } from "react"
import {motion} from "framer-motion"
import ITreinamento from "@/app/Models/ITreinamento"
import Link from "next/link"

export default function ItemsTreinoSection({conteudo, Nome}:ITreinamento) {

    const [Options, setOptions] = useState(false)

    return(
        <div className="flex flex-col">
            <section onClick={() => setOptions(!Options)} 
            className="flex px-8 w-full h-[5rem] bg-padraoCinzaC hover:bg-padraoCinzaE cursor-pointer text-[0.8rem]">
                <div className="flex flex-row gap-4 items-center">
                    <Video color="white" className="min-h-[1.5rem] min-w-[1.5rem]"/>
                    <h1 className="text-[white] font-semibold">
                        {Nome}
                    </h1>
                </div>
            </section>
            {
                Options &&
                conteudo.map(x => {
                    return(
                    <Link key={x.nome} href={x.Link} target="_blank">
                        <motion.div
                        initial={{ y: "-2rem", opacity: 0 }} 
                        animate={{ y: "0", opacity: 1 }} 
                        exit={{ y: "-2rem", opacity: 0 }} 
                        transition={{ duration: 0.25 }} 
                        className="w-full h-[5rem] cursor-pointer bg-dourado hover:bg-amareloPadrao flex px-8 justify-start items-center">
                        
                            <h1 className="text-[white] font-semibold text-[0.8rem]">
                                {x.nome}
                            </h1>
                        
                        </motion.div>
                    </Link>
                    )
                })
                
            }
        </div>
    )
}