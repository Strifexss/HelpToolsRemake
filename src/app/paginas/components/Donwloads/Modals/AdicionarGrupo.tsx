import { SetStateAction } from "react";
import ButtonDownload from "../ButtonDownloads";
import { CopyXIcon } from "lucide-react"
import { motion } from "framer-motion"
interface Props {
    CloseModal: React.Dispatch<SetStateAction<boolean>>
}

export default function AdicioarGrupo(Props: Props) {
    return (
        <motion.div   
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{duration: 0.2}}
            className="w-full h-full md:w-[35rem] md:h-auto bg-padraoCinzaE absolute md:translate-y-44 flex flex-col">
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
                <input type="text" placeholder="Nome do Grupo" id="GrupoAdd"
                    className="w-full h-[3rem] bg-padraoCinzaSC p-4 text-[white]" />
            </section>
            <section className="w-full flex justify-end items-center px-4 py-2">
                <ButtonDownload Conteudo="Adicionar" />
            </section>
        </motion.div>
    )
}