import { SetStateAction, useState } from "react";
import ButtonDownload from "../ButtonDownloads";
import { CopyXIcon } from "lucide-react"
import { motion } from "framer-motion"
import IDownloads from "@/app/Models/IDownloads";
import IDonwloadGrupos from "@/app/Models/IDownloadGrupos";

interface Props {
    CloseModal: React.Dispatch<SetStateAction<boolean>>,
    SetGrupo: React.Dispatch<SetStateAction<IDonwloadGrupos[]>>,
    ItemsCheckados: IDownloads[] | null,
    
}



export default function AdicioarGrupo(Props: Props) {

    const [nome, setNome] = useState<string>("")

    function handleNome(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setNome(event.target.value)
    } 

    function adicionar() {
        const novosDownloads = Props.ItemsCheckados?.map(x => x.nome) || [""]

        Props.SetGrupo(prevState => 
            [...prevState, {
                nome: nome,
                Downloads: novosDownloads
            }]    
        )
        window.alert("Adicionado")
    }

 

    return (
        <motion.div   
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 120 }}
            transition={{duration: 0.2}}
            className="w-full border-dourado border-2 h-full md:w-[35rem] md:h-auto bg-padraoCinzaE absolute md:translate-y-44 flex flex-col">
            <section className="w-full h-[4rem] bg-padraoCinzaC flex justify-between items-center px-4">
                <h1 className="text-[white] text-2xl font-semibold">
                    Adicionar Novo Grupo
                </h1>
                <CopyXIcon onClick={() => Props.CloseModal(false)}
                    color="white" className="cursor-pointer" />
            </section>
            <section className="w-full py-6 px-4 flex justify-center items-start flex-col gap-2">
                <label className="text-[white] font-semibold" htmlFor="GrupoAdd">
                    Insira o nome do grupo
                </label>
                <input onChange={handleNome} type="text" placeholder="Nome do Grupo" id="GrupoAdd"
                    className="w-full h-[3rem] bg-padraoCinzaSC p-4 text-[white]" />
            </section>
            <section className="px-4 w-full h-[15rem] flex flex-row flex-wrap justify-start items-start gap-2 overflow-y-scroll scrollbar-hide">
                <section className="w-full flex justify-start items-center">
                    <h1 className="text-[white] font-semibold">
                        Items adicionados:
                    </h1>
                </section>
                {
                    Props.ItemsCheckados?.map(x => {
                        return(
                            <div key={x.nome} className="w-[49%] h-[3rem] bg-padraoCinzaSC text-[white] text-center font-semibold flex justify-center items-center">
                                {x.nome}
                            </div>
                        )
                    })
                }
            </section>
            <section className="w-full flex justify-end items-center px-4 py-2">
                <ButtonDownload click={adicionar} Conteudo="Adicionar" />
            </section>
        </motion.div>
    )
}