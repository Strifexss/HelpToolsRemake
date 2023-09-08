"use client"
import SearchBar from "../SoftStore/SearchBar"
import ButtonDownload from "./ButtonDownloads"
import DownloadsItems from "./DownloadsItems"
import DownloadArea from "./DownloadArea"
import Grupos from "./GruposArea"
import { useState, useEffect } from "react"
import ModalsInfos from "./Modals/InfoModals"
import IDownloads from "@/app/Models/IDownloads"
import ModalDownloadPersonalizado from "./Modals/ModalDownloadPersonalizado"

export default function Main() {

    const [showInfoModal, setShowInfoModal] = useState(false)
    const [modalDataInfo, setModalDataInfo] = useState<IDownloads | null>(null)
    const [checkedItems, setCheckedItems] = useState<IDownloads[] | null>([])
    const [DownloadPersonalizadoModal, setDownloadPersonalizadoModal] = useState(false)

    useEffect(() => {
        console.log(checkedItems)
    },[checkedItems])

    return (
        <div className="w-full h-full flex flex-col items-center gap-10 md:gap-8 overflow-y-scroll scrollbar-hide">
            <section className="w-full h-full flex flex-col md:flex-row justify-between items-center">
                <SearchBar/>
                <section className="flex flex-row gap-6 items-center pt-4 md:pt-0">
                    <ButtonDownload click={() => setDownloadPersonalizadoModal(true)} Conteudo="Donwload Personalizado"/>
                    <ButtonDownload Conteudo="Criar Novo Grupo"/>
                </section>
            </section>
            <div className="w-full h-full flex flex-col md:flex-row gap-8">
                <DownloadArea CheckedItemsArray={checkedItems} CheckedItems={setCheckedItems} ModalDataTransfer={setModalDataInfo} handleInfoModal={setShowInfoModal}/>
                <Grupos/>
            </div>
            {   DownloadPersonalizadoModal &&
                <ModalDownloadPersonalizado ClickCancelar={() => setDownloadPersonalizadoModal(false)} items={checkedItems}/>
            }
            { showInfoModal &&
                <ModalsInfos ModalData={modalDataInfo} handleInfoModal={setShowInfoModal}/> 
            }
        </div>
    )
}