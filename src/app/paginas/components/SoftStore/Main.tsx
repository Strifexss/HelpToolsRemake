"use client"
import SearchBar from "./SearchBar"
import BuyModal from "./BuyModal"
import Items from "./Items"
import ItemsSpace from "./itemsSpace"
import { useState } from "react"
import WalletBuy from "./walletBuy"
import {X} from "lucide-react"
import Image from "next/image"
import { CamisaAmerela } from "@/app/imgs/SoftStoreImgs"
import InfoModal from "./ItemInfo"
import ISoftStoreData from "@/app/Models/SoftStoreData"
import Valor from "@/app/Models/IBUYsoftstoreData"
import ICarrinho from "@/app/Models/ICarrinho"
import ConfirmBuyModalComponent from "./ConfirmBuyModal"


export default function Main() {

    const [comprarModal, setComprarModal] = useState<boolean>(false)
    const [openInfoModal, setOpenInfoModal] = useState(false)
    const [dataInfoModal, setDataInfoModal] = useState<Valor | null>(null)
    const [Carrinho, setCarrinho] = useState<ICarrinho | null>(null)
    const [valorCarteira, setValorCarteira] = useState(500000)
    const [ConfirmBuyModal, setConfirmBuyModal] = useState(false) 

    function handleModalBuy() {
        setComprarModal(!comprarModal)
    }

    return(
        <div className="w-full h-full flex flex-col items-center gap-10 ">
            <section className="text-center">
                <h1 className="text-[white] text-[2rem] font-bold">SoftStore</h1>
                <h1 className="text-[gray] text-[1rem]">Seja bem vindo!</h1>
            </section>
            <section className="w-full flex flex-col md:flex-row items-center justify-center">
                <WalletBuy click={() => handleModalBuy()} valor={Carrinho?.ValorTotal ? Carrinho?.ValorTotal : 0} valorCarteira={valorCarteira}/>
            </section>
            <ItemsSpace Data={dataInfoModal} HandleInfoModalData={setDataInfoModal} HandleInfoModal={setOpenInfoModal} valor={setCarrinho}/>
            <section className=" w-full flex items-end justify-center">
            </section> 
            {
                comprarModal &&
                <BuyModal openConfirmBuyModal={setConfirmBuyModal} valorCarteira={valorCarteira} Items={Carrinho} clickCancelar={() => handleModalBuy()}/>
            }    
            {   openInfoModal &&
                <InfoModal Data={dataInfoModal} Close={setOpenInfoModal}/>
            }
            { ConfirmBuyModal &&
                <ConfirmBuyModalComponent setCarrinho={setCarrinho} ItemsValorTotal={Carrinho} setCarteira={setValorCarteira} setConfirmBuyModal={setConfirmBuyModal}/>
            }
        </div>
    )
}