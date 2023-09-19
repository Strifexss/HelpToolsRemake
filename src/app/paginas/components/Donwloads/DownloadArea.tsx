"use client"
import { useEffect, useState } from "react";
import DownloadsItems from "./DownloadsItems";
import FetchDataDownloads from "@/app/hooks/useDownloadData";
import IDownloads from "@/app/Models/IDownloads";
import ModalsInfos from "./Modals/InfoModals";

interface Props {
    handleInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
    ModalDataTransfer: React.Dispatch<React.SetStateAction<IDownloads | null>>;
    CheckedItems: React.Dispatch<React.SetStateAction<IDownloads[] | null>>;
    CheckedItemsArray: IDownloads[] | null,
    Data: IDownloads[] | null
}

export default function DownloadArea({Data, handleInfoModal, ModalDataTransfer, CheckedItems, CheckedItemsArray}:Props){

   

    return(
        <section className="h-full 2xl:h-[90vh] w-full md:w-[65%] bg-padraoCinzaSC rounded-md flex flex-col">
<div className="w-full bg-dourado h-[5rem]  flex justify-center items-center">
    <h1 className="md:text-[1.5rem] font-semibold text-[white] text-center">
        Arquivos disponiveis para download
    </h1>
</div>
<div className="w-full h-full overflow-y-scroll scrollbar-hide">
    <div className="w-full h-[3rem] border-b-padraoCinzaE border-b-[2px] grid grid-cols-3 md:grid-cols-5 px-2">
        <h1 className="text-[white] font-semibold flex justify-center items-center">Download</h1>
        <h1 className="text-[white] font-semibold md:flex justify-center items-center hidden">ID</h1>
        <h1 className="text-[white] font-semibold flex justify-center items-center">Nome</h1>
        <h1 className="text-[white] font-semibold hidden md:flex justify-center items-center" >Informações</h1>
        <h1 className="text-[white] font-semibold flex justify-center items-center">Personalizado</h1>
    </div>
    {
        Data?.map(x => {
            return(
                <DownloadsItems CheckedItemsArray={CheckedItemsArray} CheckedItems={CheckedItems} ModalDataTransfer={ModalDataTransfer} handleInfoModal={handleInfoModal} key={x.id} id={x.id} nome={x.nome} Downloads={x.Downloads} Local={x.Local} tamanho={x.tamanho} versão={x.versão}/>
            )
        })
    }
</div>
</section>
    )
}
