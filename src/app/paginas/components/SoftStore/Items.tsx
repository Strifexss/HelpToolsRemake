"use client"

import { Banner } from "@/app/imgs/imgExport"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

interface Props {
    valor: React.Dispatch<React.SetStateAction<number>>;
    valorNumero: number,
    preco: number
}

export default function Items({valor, valorNumero, preco}:Props) {

    const [quantidade, setQuantidade] = useState<number>(0)


    function aumentarQuantidade() {
        setQuantidade(quantidade + 1)
        valor(valorNumero + preco)
    }


    function diminuirQuantidade() {
        if(quantidade == 0) {
            setQuantidade(0)
        }
        else {
            setQuantidade(quantidade - 1)
            valor(valorNumero - preco)
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
                    <h1 className="text-[Orange] text-[0.8rem] font-semibold">${preco}</h1>
                    <section className="flex flex-row gap-2">
                        <ArrowLeft color="white" onClick={() => diminuirQuantidade()}/>
                        <h1 className="text-[white] w-[2rem] text-center bg-padraoCinzaSC">{quantidade}</h1>
                        <ArrowRight color="white" onClick={() => aumentarQuantidade() }/>
                    </section>
                </section>
            </section>
        </div>
    )
}