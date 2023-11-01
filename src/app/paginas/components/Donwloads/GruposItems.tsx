import IDonwloadGrupos from "@/app/Models/IDownloadGrupos"
import { Download } from "lucide-react"
import { SetStateAction } from "react"
import {BadgeInfo} from "lucide-react"

interface Props {
    Conteudo: IDonwloadGrupos,
    OpenItemsGrupos: React.Dispatch<SetStateAction<boolean>>,
    setInfosModalItemsGrupos: React.Dispatch<SetStateAction<IDonwloadGrupos>>,
}

export default function GruposItems(Props:Props) {

    function HandleInfoModal() {
        Props.setInfosModalItemsGrupos(Props.Conteudo)
        Props.OpenItemsGrupos(true)
    }

    return(
        <div className="w-full h-[4rem] bg-padraoCinzaC hover:bg-padraoCinzaE flex flex-row gap-16 justify-between px-8 cursor-pointer">
            <div className="flex justify-center items-center h-full">
                <Download onClick={() => window.alert(`Donwload ${Props.Conteudo.nome} iniciado`)} 
                color="orange"/>
            </div>
            <div className="h-full flex justify-center items-center">
                <h1 className="text-[white] text-[0.8rem] font-semibold">
                    {Props.Conteudo.nome}
                </h1>
            </div>
            <div className="flex justify-center items-center h-full">
                <BadgeInfo onClick={() => HandleInfoModal()}
                color="orange"/>
            </div>
        </div>
    )
}