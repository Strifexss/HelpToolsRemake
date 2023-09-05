"use client"
import SearchBar from "./SearchBar"
import BuyBar from "./BuyBar"
import Items from "./Items"
import ItemsSpace from "./itemsSpace"
import { useState } from "react"
export default function Main() {

    const [valor, setValor] = useState<number>(0)

    function aumentarValor(preco:number) {
        setValor(valor + preco)
    }
    function diminuirValor(preco:number) {
        if(valor == 0) {
            setValor(0)
        }
        else
        {setValor(valor - preco)}
    }

    return(
        <div className="w-full h-full flex flex-col items-center gap-10 ">
            <SearchBar/>
            <ItemsSpace aumentarValor={() => aumentarValor(100)} diminuirValor={() => diminuirValor(100)}/>
            <section className=" w-full flex items-end justify-center">
                <BuyBar valor={valor} />
            </section>                
        </div>
    )
}