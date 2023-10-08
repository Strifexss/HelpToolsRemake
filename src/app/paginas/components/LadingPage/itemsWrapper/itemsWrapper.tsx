import WrapperConteudo from "../../../../Models/WrapperConteudo"
import { Video } from "lucide-react"
import { Banner, RequisitosDoSistema, FluxoTecnica } from "@/app/imgs/imgExport"
import { StaticImageData } from "next/image"

interface Elementos {
    Image: StaticImageData,
    textoPrincipal: string,
    textoSecundario: string,
    Links: string
}

const ImagensCarousel:Elementos[] = [{Image: Banner, textoPrincipal:"Softcom", textoSecundario:"A melhor solução para a sua empresa", Links: "https://softcomtecnologia.com.br"}, {Image: RequisitosDoSistema, textoPrincipal:"Requisitos do Sistema", textoSecundario:"Requisitos Minimos para Rodar o Sistema", Links: "http://177.43.232.3:10000/helptools2/public/core/promover/detalhe/id/4669"}, {Image: FluxoTecnica, textoPrincipal:"Fluxo", textoSecundario:"Técnicas de Análise", Links: "http://177.43.232.3:10000/helptools2/public/upload/images/promover/4767-técnicas_de_análise.png"}] 

const ConteudoWrapper:WrapperConteudo[] = [{Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Farmacia"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Moda"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Ótica"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento PetShop"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Fiscal"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Alimento"}, {Icone: <Video color="white"/>, Texto: "BatismoComercial - Segmento Hospitalar"}]

const LiberacoesConteudo:WrapperConteudo[] = [{Texto: "Softshop", data: "01/09/2023", Links: "http://177.43.232.3:10000/helptools2/public/avisos/liberacao/id/624"}, {Texto: "Emissor NFE", data: "04/09/2023", Links: "http://177.43.232.3:10000/helptools2/public/avisos/liberacao/id/626"}, {Texto: "Softcomshop", data: "29/08/2023", Links: "http://177.43.232.3:10000/helptools2/public/avisos/liberacao/id/627"}, {Texto: "SetupSoftcomDLLs", data: "29/08/2023", Links: "http://177.43.232.3:10000/helptools2/public/avisos/liberacao/id/622"} ]

export {
    ConteudoWrapper, LiberacoesConteudo, ImagensCarousel 
}
