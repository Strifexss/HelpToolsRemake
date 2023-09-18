"use client"
import Buttons from "./Buttons"
import { Download, Library, LucideLibrary, Headphones, Book, Triangle, Home, User2, Store } from "lucide-react"
import { UserModel } from "@/app/Models/UserModel"
import ModalUSuario from "./ModalUsuario"
import { useState } from "react"
import { usePathname } from "next/navigation"
import  PaginasDestacadas  from "../PaginasArray"
import { RotaDocumentacao, RotaTreinamento } from "@/app/hooks/useRotas"

export default function ButtonsSection() {
    
    const Usuario = new UserModel()
    const [showModal, setShowModal] = useState<boolean>(false)

    const RotaDocumento = RotaDocumentacao()
    const RotaTreino = RotaTreinamento()
    return(
        <section className="w-full h-full flex flex-col gap-4 2xl:gap-6">
            <section className="w-full gap-1">
                <PaginasDestacadas />
            </section>
            <section className="w-full gap-1">
                <Buttons Click={() => RotaTreino()} Conteudo="Treinamento" Icone={<Triangle color="white"/>} key={"Treinamento"}/>
                <Buttons Click={() => RotaDocumento()} Conteudo="Documentação" Icone={<Book color="white"/>} key={"Documentação"}/>
                <Buttons Conteudo="SuporteComercial" Icone={<Headphones color="white"/>} key={"SuporteComercial"}/>
                <Buttons Conteudo="Chat Supervisão" Icone={<Library color="white"/>} key={"Chat Supervisão"}/>
            </section>
            <section className="w-full h-full flex flex-col justify-end items-center">
                { showModal &&
                    <ModalUSuario/>
                }
                <Buttons Click={() => setShowModal(!showModal)} 
                Conteudo={`Olá ${Usuario.getName()}! `} hasBackground Icone={<User2 color="white"/>} key={"Usuario"}/>
            </section>
        </section>
    )

}