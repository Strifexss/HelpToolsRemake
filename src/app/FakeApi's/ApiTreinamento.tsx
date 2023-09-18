import ITreinamento from "../Models/ITreinamento";

const APITreinamento:ITreinamento[] = [{
    Nome: "Vendas: Orçamentos, Notas Fiscais e Cupons Eletrônicos",
    conteudo: [
        {
        nome:"Softshop: Autopeças - Orçamento",
        Link: "https://www.youtube.com/embed/PgnCuLZZhig"
    },
    {
        nome: "Softshop: Autopeças - Venda",
        Link: "https://www.youtube.com/embed/j4M-jazeyw0"
    }

    ]
},
{
    Nome: "Batismo Comercial",
    conteudo: [
       {
        nome: "Batismo Comercial - Segmento Farmacia",
        Link: "https://www.youtube.com/embed/lpQhspw3FY4"
       },
       {
        nome: "Batismo Comercial - Segmento Moda",
        Link: "https://www.youtube.com/embed/yE4hve1KPJM"
       }
    ]
}
]

const JsonData = JSON.stringify(APITreinamento)
const blob = new Blob([JsonData], {type: "aplication/json"})
const urlTreinamento = URL.createObjectURL(blob)

export {
    urlTreinamento
}