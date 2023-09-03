import { UserModel } from "@/app/Models/UserModel"
import Wrapper from "./Wrapper"
import WrapperConteudo from "@/app/Models/WrapperConteudo"
import { Video } from "lucide-react"

export default function Main() {

    const ConteudoWrapper:WrapperConteudo[] = [{Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Farmacia"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Moda"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Ótica"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento PetShop"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Fiscal"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Alimento"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Hospitalar"}]

    const Usuario = new UserModel()

    return(
        <div className="w-full h-full flex flex-col overflow-y-scroll scrollbar-hide gap-16">
            <section className="w-full flex flex-row justify-start items-center gap-4">
            <h1 className="text-[white] text-[1.5rem] md:text-[1.5rem] 2xl:text-[2rem] font-bold">
                Seja bem vindo {Usuario.getName()}!
            </h1>
            <h1 className="text-[gray]">
                Sua Jornada rumo ao próximo nível está apenas começando!
            </h1>
            </section>
            <section className="w-full flex flex-row justify-center gap-8 md:gap-16 2xl:gap-16 flex-wrap">
                <Wrapper Conteudo={ConteudoWrapper} headerTexto="Ultimos Vídeos"/>
                <Wrapper headerTexto="Liberações"/>
                <Wrapper headerTexto="Comunicados Fiscais"/>
            </section>
        </div>
    )
}   