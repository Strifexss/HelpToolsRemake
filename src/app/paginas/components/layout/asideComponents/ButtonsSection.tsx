"use client"
import Buttons from "./Buttons"
import { User2 } from "lucide-react"
import { UserModel } from "@/app/Models/UserModel"
import ModalUSuario from "./ModalUsuario"
import { useState } from "react"
import  PaginasDestacadas  from "../PaginasArray"

export default function ButtonsSection() {
    
    const Usuario = new UserModel()
    const [showModal, setShowModal] = useState<boolean>(false)

    return(
        <section className="w-full h-full flex flex-col gap-4 2xl:gap-6">
            <section className="w-full gap-1">
                <PaginasDestacadas />
            </section>
            <section className="w-full h-full flex flex-col justify-end items-center">
                { showModal &&
                    <ModalUSuario/>
                }
                <Buttons Click={() => setShowModal(!showModal)} 
                Conteudo={`Olá ${Usuario.getName()}! `} BackgroundOrange Icone={<User2 color="white"/>} key={"Usuario"}/>
            </section>
        </section>
    )

}