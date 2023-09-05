"use client"
import SearchBar from "./SearchBar"
import BuyBar from "./BuyBar"
import Items from "./Items"
import ItemsSpace from "./itemsSpace"
import { useState } from "react"

export default function Main() {

    const [valor, setValor] = useState<number>(0)

    return(
        <div className="w-full h-full flex flex-col items-center gap-10 ">
            <SearchBar/>
            <ItemsSpace valor={setValor} valorNumero={valor}/>
            <section className=" w-full flex items-end justify-center">
                <BuyBar valor={valor} />
            </section>                
        </div>
    )
}