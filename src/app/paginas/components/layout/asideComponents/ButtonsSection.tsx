"use client"
import Buttons from "./Buttons"
import { User2 } from "lucide-react"
import { UserModel } from "@/app/Models/UserModel"
import ModalUSuario from "./ModalUsuario"
import { useState } from "react"
import  PaginasDestacadas  from "../PaginasArray"

interface Props {
    show: boolean
}

export default function ButtonsSection(Props:Props) {
    
    const Usuario = new UserModel()
    const [showModal, setShowModal] = useState<boolean>(false)

    return(
        <section className="w-full h-full flex flex-col gap-4 2xl:gap-6">
            <section className="w-full gap-1">
                <PaginasDestacadas show={Props.show}/>
            </section>
            <section className="w-full h-full flex flex-col justify-end items-center">
                { showModal &&
                    <ModalUSuario show={Props.show}/>
                }
                <Buttons show={Props.show} Click={() => setShowModal(!showModal)} 
                Conteudo={`Olá ${Usuario.getName()}! `} BackgroundOrange Icone={<User2 color="white" className="w-[1.5rem] md:w-[1.2rem] 2xl:w-[1.5rem]"/>} key={"Usuario"}/>
            </section>
        </section>
    )

}