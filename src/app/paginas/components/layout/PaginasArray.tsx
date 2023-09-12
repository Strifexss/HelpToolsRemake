import { Home, Download, Library, Store } from "lucide-react";
import { RotaConhecimentos, RotaDownloads, RotaHome, RotaSoftStore } from "@/app/hooks/useRotas";
import Buttons from "./asideComponents/Buttons";
import {usePathname} from "next/navigation"

export default function PaginasDestacadas()  {

const rotaNome = usePathname()

console.log(rotaNome)

const ArrayDestacados = [
  {
    Conteudo: "Inicio",
    hasBackground: true,
    Icone: <Home color="white" />,
    Click: RotaHome(),
    InPage: rotaNome === "/paginas/LandingPage"
  },
  {
    Conteudo: "Download",
    hasBackground: true,
    Icone: <Download color="white" />,
    Click: RotaDownloads(),
    InPage: rotaNome === "/paginas/Downloads"
  },
  {
    Conteudo: "Conhecimento",
    hasBackground: true,
    Icone: <Library color="white" />,
    Click: RotaConhecimentos(),
    InPage: rotaNome === "/paginas/Conhecimentos"
  },
  {
    Conteudo: "SoftStore",
    hasBackground: true,
    Icone: <Store color="white" />,
    Click: RotaSoftStore(),
    InPage: rotaNome === "/paginas/SoftStore"
  },
];

return (

<section className="w-full gap-1">
  {ArrayDestacados.map((x) => {
    return (
      <Buttons
        key={x.Conteudo}
        Conteudo={x.Conteudo}
        Click={() => x.Click()}
        Icone={x.Icone}
        hasBackground={x.hasBackground}
        InPage = {x.InPage}
      />
    );
  })}
</section>

)
}