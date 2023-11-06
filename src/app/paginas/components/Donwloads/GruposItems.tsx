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

    function HandleDownload() {
        console.log(Props.Conteudo)
        Props.Conteudo.Downloads.map(x => {
            window.open(x.link, '_blank')
        })
    }

    return(
        <div className="w-full h-[4rem] bg-padraoCinzaC hover:bg-padraoCinzaE flex flex-row gap-16 justify-between px-8 cursor-pointer">
            <div className="flex justify-center items-center h-full">
                <Download onClick={() => HandleDownload()} 
                color="orange" className="w-[1.5rem] md:w-[1.2rem] 2xl:w-[1.5rem]"/>
            </div>
            <div className="h-full flex justify-center items-center">
                <h1 className="text-[white] font-semibold">
                    {Props.Conteudo.nome}
                </h1>
            </div>
            <div className="flex justify-center items-center h-full">
                <BadgeInfo onClick={() => HandleInfoModal()}
                color="orange" className="w-[1.5rem] md:w-[1.2rem] 2xl:w-[1.5rem]"/>
            </div>
        </div>
    )
}