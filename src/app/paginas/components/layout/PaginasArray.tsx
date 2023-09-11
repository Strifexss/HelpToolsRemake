import { Home, Download, Library, Store } from "lucide-react";
import { RotaConhecimentos, RotaDownloads, RotaHome, RotaSoftStore } from "@/app/hooks/useRotas";
import Buttons from "./asideComponents/Buttons";

export default function PaginasDestacadas()  {

const ArrayDestacados = [
  {
    Conteudo: "Inicio",
    hasBackground: true,
    Icone: <Home color="white" />,
    Click: RotaHome(),
  },
  {
    Conteudo: "Download",
    hasBackground: true,
    Icone: <Download color="white" />,
    Click: RotaDownloads(),
  },
  {
    Conteudo: "Conhecimento",
    hasBackground: true,
    Icone: <Library color="white" />,
    Click: RotaConhecimentos(),
  },
  {
    Conteudo: "SoftStore",
    hasBackground: true,
    Icone: <Store color="white" />,
    Click: RotaSoftStore(),
  },
];

return (

<section className="w-full gap-1">
  {ArrayDestacados.map((x) => {
    return (
      <Buttons
        key={x.Conteudo}
        Conteudo={x.Conteudo}
        Click={() => x.Click()} // Chame a função dentro do onClick
        Icone={x.Icone}
        hasBackground={x.hasBackground}
      />
    );
  })}
</section>

)
}