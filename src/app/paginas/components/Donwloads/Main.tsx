"use client"
import SearchBar from "../SoftStore/SearchBar"
import ButtonDownload from "./ButtonDownloads"
import DownloadsItems from "./DownloadsItems"
import DownloadArea from "./DownloadArea"
import Grupos from "./GruposArea"
import { useState } from "react"
import ModalsInfos from "./Modals/InfoModals"
import IDownloads from "@/app/Models/IDownloads"

export default function Main() {

    const [showInfoModal, setShowInfoModal] = useState(false)
    const [modalDataInfo, setModalDataInfo] = useState<IDownloads | null>(null)

    return(
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 md:gap-8 overflow-y-scroll scrollbar-hide">
            <section className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                <SearchBar/>
            </section>
            <div className="w-full h-full flex flex-col md:flex-row gap-8">
                <DownloadArea ModalDataTransfer={setModalDataInfo} handleInfoModal={setShowInfoModal}/>
                <Grupos/>
            </div>
            { showInfoModal &&
                <ModalsInfos ModalData={modalDataInfo} handleInfoModal={setShowInfoModal}/> 
            }
        </div>
    )
}