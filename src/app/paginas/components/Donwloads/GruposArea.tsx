import IDonwloadGrupos from "@/app/Models/IDownloadGrupos"
import GruposItems from "./GruposItems"
import { SetStateAction, useState } from "react"
import { ItemsGrupos } from "./ItemsGrupos/ItemsGrupos"

interface Props {
    Items: IDonwloadGrupos[] | [],
    setItems: React.Dispatch<SetStateAction<IDonwloadGrupos[] | []>>,
    setInfosModalItemsGrupos: React.Dispatch<SetStateAction<IDonwloadGrupos>>,
    OpenItemsGrupos: React.Dispatch<SetStateAction<boolean>>,
}

export default function Grupos(Props:Props) {

    

    return(
        <section className="w-full md:w-[35%] h-[50%] flex flex-col">
            <section className="w-full h-full bg-padraoCinzaSC flex flex-col scrollbar-hide rounded-md">
                <div className="bg-dourado font-semibold flex justify-center items-center w-full h-[5rem]">
                    <h1 className="md:text-[1.2rem] font-semibold text-[white]">
                        <h1>Grupos</h1>
                    </h1>
                </div>
                <section className="w-full h-full flex flex-col">
                    {
                        Props.Items.map(x => {
                            return(
                                <GruposItems setInfosModalItemsGrupos={Props.setInfosModalItemsGrupos} OpenItemsGrupos={Props.OpenItemsGrupos} key={x.nome} Conteudo={x}/>
                            )
                        })
                    }
                </section>
            </section>
        </section>
    )
}