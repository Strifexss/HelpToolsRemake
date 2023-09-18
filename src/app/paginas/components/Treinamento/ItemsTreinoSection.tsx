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
            className="flex px-8 w-full h-[5rem] bg-padraoCinzaC hover:bg-padraoCinzaE cursor-pointer">
                <div className="flex flex-row gap-4 items-center">
                    <Video color="white"/>
                    <h1 className="text-[white] font-semibold">
                        {Nome}
                    </h1>
                </div>
            </section>
            {
                Options &&
                conteudo.map(x => {
                    return(
                    <motion.div
                    initial={{ y: "-2rem", opacity: 0 }} 
                    animate={{ y: "0", opacity: 1 }} 
                    exit={{ y: "-2rem", opacity: 0 }} 
                    transition={{ duration: 0.25 }} 
                    key={x.nome} className="w-full h-[5rem] cursor-pointer bg-dourado hover:bg-amareloPadrao flex px-8 justify-start items-center">
                        <Link href={x.Link} target="_blank">
                        <h1 className="text-[white] font-semibold">
                            {x.nome}
                        </h1>
                        </Link>
                    </motion.div>
                    )
                })
                
            }
        </div>
    )
}