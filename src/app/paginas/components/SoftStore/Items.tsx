"use client"

import { Banner } from "@/app/imgs/imgExport"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

interface Props {
    aumentarValor: () => void,
    diminuirValor: () => void
}

export default function Items({aumentarValor, diminuirValor}:Props) {

    const [quantidade, setQuantidade] = useState<number>(0)


    function aumentarQuantidade() {
        setQuantidade(quantidade + 1)
    }


    function diminuirQuantidade() {
        if(quantidade == 0) {
            setQuantidade(0)
        }
        else {
            setQuantidade(quantidade - 1)
        }
    }


    return(
        <div className=" w-[100%] md:w-[25rem] h-[10rem] bg-padraoCinzaC flex flex-row cursor-pointer">
            <Image className="w-[40%]"
                src={Banner}
                alt="Imagem"
                width={1000}
                height={1000}
            />
            <section className="w-full h-full flex flex-col p-4 gap-2 justify-center">
                <h1 className="text-[white] font-semibold">Mans Shirt Casual</h1>
                <h1 className="text-[gray] text-[0.8rem] font-semibold">Blue M</h1>
                <section className="w-full flex flex-row justify-between items-center">
                    <h1 className="text-[Orange] text-[0.8rem] font-semibold">$20,00</h1>
                    <section className="flex flex-row gap-2">
                        <ArrowLeft color="white" onClick={() => {diminuirQuantidade(), diminuirValor()}}/>
                        <h1 className="text-[white] w-[2rem] text-center bg-padraoCinzaSC">{quantidade}</h1>
                        <ArrowRight color="white" onClick={() => {aumentarQuantidade(), aumentarValor()}}/>
                    </section>
                </section>
            </section>
        </div>
    )
}