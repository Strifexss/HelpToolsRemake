import IDonwloadGrupos from "@/app/Models/IDownloadGrupos"
import {X, Trash2} from "lucide-react"
import { SetStateAction, useState } from "react"

interface Props {
    HandleCloseModal: React.Dispatch<SetStateAction<boolean>>,
    setGrupos: React.Dispatch<SetStateAction<IDonwloadGrupos[]>>,
    Grupos: IDonwloadGrupos[],
    Dados: IDonwloadGrupos
}

export default function InfosGrupoModal(Props: Props) {

    const [handleExcluir, setHandleExcluir] = useState(false)

    function Excluir() {
        const novosGrupos = Props.Grupos.filter(x => x.nome !== Props.Dados.nome)
        Props.setGrupos(novosGrupos)
        setHandleExcluir(false)
    }

    return(
        <div className="w-[20rem] h-[25rem] bg-padraoCinzaSC border-dourado border-2 absolute translate-y-40 flex flex-col gap-6 p-6 items-center">
        <section className="w-full flex justify-between">
            <h1 className="text-[white] font-semibold">
                <h1>{Props.Dados.nome}</h1>
            </h1>
            <div className="flex gap-6">
            <Trash2 className="cursor-pointer" 
                onClick={() => setHandleExcluir(true)} 
                color="white"/>
            <X className="cursor-pointer" 
                color="white" 
                onClick={() => Props.HandleCloseModal(false)}/>
            </div>
        </section>
        <section className="w-full h-full overflow-y-scroll scrollbar-hide flex flex-col gap-2">
            {Props.Dados.Downloads.map(x => {
                return(
                    <div key={x} className="w-full h-[3rem] bg-padraoCinzaC flex p-2 items-center justify-center">
                        <h1 className="text-[white] font-semibold text-center">
                            {x}
                        </h1>
                    </div>
                )
            })}
        </section>
        {
            handleExcluir &&
        <div className="w-full h-full absolute bg-padraoCinzaSC -translate-y-6 flex flex-col justify-center items-center gap-6 p-6">
            <h1 className="text-[white] font-semibold text-[1.2rem]">
                Desja Excluir o Grupo?
            </h1>
            <section className="w-full flex gap-2">
                <button onClick={() => setHandleExcluir(false)} 
                className="w-[50%] h-[2rem] bg-dourado text-[white] font-semibold">
                    Não
                </button>
                <button onClick={() => {Excluir(), Props.HandleCloseModal(true)}}
                className="w-[50%] h-[2rem] bg-[#c42020] text-[white] font-semibold">
                    Sim
                </button>
            </section>
        </div>
        }
    </div>
    )
}