import { Book, Download, Headphones, Home, Library, Store, Triangle, User2, } from "lucide-react";
import Buttons from "../asideComponents/Buttons";
import { UserModel } from "@/app/Models/UserModel";
import { Deslogar, RotaHome, RotaSoftStore } from "@/app/hooks/useRotas";
export default function Items() {

    const Usuario = new UserModel()
    const deslogar = Deslogar()

    return(
        <div className="w-full h-full mt-16">
               <section className="w-full gap-4">
                <Buttons Click={RotaHome()} Conteudo="Inicio" hasBackground Icone={<Home color="white"/>} key={"Inicio"}/>
                <Buttons Conteudo="Download" hasBackground Icone={<Download color="white"/>} key={"Download"}/>
                <Buttons Conteudo="Conhecimento" hasBackground Icone={<Library color="white"/>} key={"Conhecimento"}/>
                <Buttons Click={RotaSoftStore()} Conteudo="SoftStore" hasBackground Icone={<Store color="white"/>} key={"Conhecimento"}/>
            </section>
            <section className="w-full gap-4">
                <Buttons Conteudo="Treinamento" Icone={<Triangle color="white"/>} key={"Treinamento"}/>
                <Buttons Conteudo="Documentação" Icone={<Book color="white"/>} key={"Documentação"}/>
                <Buttons Conteudo="SuporteComercial" Icone={<Headphones color="white"/>} key={"SuporteComercial"}/>
                <Buttons Conteudo="Chat Supervisão" Icone={<Library color="white"/>} key={"Chat Supervisão"}/>
                <Buttons Click={deslogar}
                Conteudo={`Olá ${Usuario.getName()}! `} hasBackground Icone={<User2 color="white"/>} key={"Usuario"}/>
            </section>
        </div>
    )
}