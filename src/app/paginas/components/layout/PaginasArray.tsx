import { Home, Download, Library, Store, Triangle, Folder, Headphones, Paperclip } from "lucide-react";
import { RotaConhecimentos, RotaDownloads, RotaHome, RotaSoftStore, RotaTreinamento, ChatSupervisao, RotaConhecimentosConteudo, RotaDocumentacao, RotaSuporteComercial } from "@/app/hooks/useRotas";
import Buttons from "./asideComponents/Buttons";
import {usePathname} from "next/navigation"

interface Props {
  show: boolean
}

export default function PaginasDestacadas(Props:Props)  {

const rotaNome = usePathname()

const ArrayDestacados = [
  {
    Conteudo: "Inicio",
    hasBackground: true,
    Icone: <Home color={`${rotaNome === "/paginas/LandingPage" ? "orange" : "white"}`} />,
    Click: RotaHome(),
    InPage: rotaNome === "/paginas/LandingPage"
  },
  {
    Conteudo: "Download",
    hasBackground: true,
    Icone: <Download color={`${rotaNome === "/paginas/Downloads" ? "orange" : "white"}`} />,
    Click: RotaDownloads(),
    InPage: rotaNome === "/paginas/Downloads"
  },
  {
    Conteudo: "Conhecimento",
    hasBackground: true,
    Icone: <Library color={`${rotaNome === "/paginas/Conhecimentos" ? "orange" : "white"}`} />,
    Click: RotaConhecimentos(),
    InPage: rotaNome === "/paginas/Conhecimentos"
  },
  {
    Conteudo: "Treinamento",
    hasBackground: false,
    Icone: <Triangle color={`${rotaNome === "/paginas/Treinamento" ? "orange" : "white"}`} />,
    Click: RotaTreinamento(),
    InPage: rotaNome === "/paginas/Treinamento"
  },
  {
    Conteudo: "Documentação",
    hasBackground: false,
    Icone: <Folder color={`${rotaNome === "/paginas/Documentacao" ? "orange" : "white"}`} />,
    Click: RotaDocumentacao(),
    InPage: rotaNome === "/paginas/Documentacao"
  },
  {
    Conteudo: "Suporte Comercial",
    hasBackground: false,
    Icone: <Headphones color={`${rotaNome === "/paginas/SuporteComercial" ? "orange" : "white"}`} />,
    Click: RotaSuporteComercial(),
    InPage: rotaNome === "/paginas/SuporteComercial"
  },
  {
    Conteudo: "Chat Supervisão",
    hasBackground: false,
    Icone: <Paperclip color={`${rotaNome === "/paginas/ChatSupervisao" ? "orange" : "white"}`} />,
    Click: ChatSupervisao(),
    InPage: rotaNome === "/paginas/ChatSupervisao"
  },
];

return (

<section className="w-full flex flex-col gap-1">
  {ArrayDestacados.map((x) => {
    return (
      <Buttons 
        key={x.Conteudo}
        Conteudo={x.Conteudo}
        Click={() => x.Click()}
        Icone={x.Icone}
        hasBackground={x.hasBackground}
        InPage = {x.InPage}
        show={Props.show}
      />
    );
  })}
</section>

)
}