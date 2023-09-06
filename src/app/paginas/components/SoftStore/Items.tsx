"use client"

import { Banner } from "@/app/imgs/imgExport"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import ISoftStoreData from "@/app/Models/SoftStoreData"

interface Props extends ISoftStoreData {
    setValor: React.Dispatch<React.SetStateAction<number>>;
    valorNumero: number,
}

export default function Items({setValor, valorNumero, nome, preco, type, image}:Props) {

    const [quantidade, setQuantidade] = useState<number>(0)


    function aumentarQuantidade() {
        setQuantidade(quantidade + 1)
        setValor(valorNumero + preco)
    }


    function diminuirQuantidade() {
        if(quantidade == 0) {
            setQuantidade(0)
        }
        else {
            setQuantidade(quantidade - 1)
            setValor(valorNumero - preco)
        }
    }


    return(
        <div className=" w-[100%] h-[20rem] md:w-[15rem] 2xl:h-[18rem] bg-padraoCinzaC flex flex-col cursor-pointer">
            <Image className="w-full h-[70%]"
                src={image}
                alt="Imagem"
                width={1000}
                height={1000}
            />
            <section className="w-full h-full flex flex-col p-4 gap-2 justify-center">
                <h1 className="text-[white] font-semibold">{nome}</h1>
                <h1 className="text-[gray] text-[0.8rem] font-semibold">{type}</h1>
                <section className="w-full flex flex-row justify-between items-center">
                    <h1 className="text-[Orange] text-[1.5rem] font-semibold">${preco}</h1>
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