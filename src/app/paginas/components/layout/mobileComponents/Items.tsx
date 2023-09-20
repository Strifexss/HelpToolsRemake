import { Book, Download, Headphones, Home, Library, Store, Triangle, User2, } from "lucide-react";
import Buttons from "../asideComponents/Buttons";
import { UserModel } from "@/app/Models/UserModel";
import { Deslogar, RotaHome, RotaSoftStore, RotaDownloads, RotaConhecimentos } from "@/app/hooks/useRotas";
import PaginasDestacadas from "../PaginasArray";
import ButtonsSection from "../asideComponents/ButtonsSection";
export default function Items() {

    const Usuario = new UserModel()
    const deslogar = Deslogar()

    return(
        <div className="w-full h-full mt-16">
          <ButtonsSection/>
        </div>
    )
}