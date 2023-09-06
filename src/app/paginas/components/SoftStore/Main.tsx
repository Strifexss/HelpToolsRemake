"use client"
import SearchBar from "./SearchBar"
import BuyModal from "./BuyModal"
import Items from "./Items"
import ItemsSpace from "./itemsSpace"
import { useState } from "react"
import WalletBuy from "./walletBuy"

export default function Main() {

    const [valor, setValor] = useState<number>(0)
    const [comprarModal, setComprarModal] = useState<boolean>(false)

    function handleModalBuy() {
        setComprarModal(!comprarModal)
    }

    return(
        <div className="w-full h-full flex flex-col items-center gap-10 ">
            <section className="text-center">
                <h1 className="text-[white] text-[2rem] font-bold">SoftStore</h1>
                <h1 className="text-[gray] text-[1rem]">Seja bem vindo!</h1>
            </section>
            <section className="w-full flex flex-col md:flex-row items-center justify-around">
                <SearchBar/>
                <WalletBuy click={() => handleModalBuy()} valor={valor}/>
            </section>
            <ItemsSpace valor={setValor} valorNumero={valor}/>
            <section className=" w-full flex items-end justify-center">
            </section> 
            {
                comprarModal &&
                <BuyModal clickCancelar={() => handleModalBuy()}/>
            }               
        </div>
    )
}