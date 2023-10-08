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
},
{
    Nome: "Aprenda a gerenciar o financeiro",
    conteudo: [{
        nome: "Contas a pagar",
        Link: "https://www.youtube.com/embed/C-RODmg7fn8"
    },
    {
        nome: "contas a receber",
        Link: "https://www.youtube.com/embed/IDffyx9cBuw"
    },
    {
        nome: "Conciliador de Cartões",
        Link: "https://www.youtube.com/embed/mqXSwRiTlGM"
    }]
},
{
    Nome: "Para o seu contador",
    conteudo: [{
        nome: "Inventário",
        Link: "https://www.youtube.com/embed/UJslc0jpGik"
    },
    {
        nome: "Enviando Xml para o seu contador",
        Link: "https://www.youtube.com/embed/UJslc0jpGik"
    }]
}
    
]

const JsonData = JSON.stringify(APITreinamento)
const blob = new Blob([JsonData], {type: "aplication/json"})
const urlTreinamento = URL.createObjectURL(blob)

export {
    urlTreinamento
}