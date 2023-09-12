import { Book, Download, Headphones, Home, Library, Store, Triangle, User2, } from "lucide-react";
import Buttons from "../asideComponents/Buttons";
import { UserModel } from "@/app/Models/UserModel";
import { Deslogar, RotaHome, RotaSoftStore, RotaDownloads, RotaConhecimentos } from "@/app/hooks/useRotas";
import PaginasDestacadas from "../PaginasArray";
export default function Items() {

    const Usuario = new UserModel()
    const deslogar = Deslogar()

    return(
        <div className="w-full h-full mt-16">
               <section className="w-full gap-4">
                    <PaginasDestacadas/>
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