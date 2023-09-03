import Buttons from "./Buttons"
import { Deslogar } from "@/app/hooks/useRotas"


export default function ModalUSuario() {
    return(
        <div className="w-[13rem] h-[15rem] bg-padraoCinzaE absolute -translate-y-14 flex flex-col justify-end p-4">
            <Buttons Click={ Deslogar()} hasBackground Conteudo="Deslogar" />
        </div>
    )
}