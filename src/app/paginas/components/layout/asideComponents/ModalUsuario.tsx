import Buttons from "./Buttons"
import { Deslogar } from "@/app/hooks/useRotas"

interface Props {
    show: boolean
}

export default function ModalUSuario(Props: Props) {
    return(
        <div className={`w-[13rem] h-[15rem] bg-padraoCinzaE absolute -translate-y-14 ${Props.show ? "md:translate-x-0" : "md:translate-x-20"}  flex flex-col justify-end p-4`}>
            <Buttons show Click={ Deslogar()} hasBackground Conteudo="Deslogar" />
        </div>
    )
}