import ITreinamento from "../Models/ITreinamento";

const APITreinamento:ITreinamento[] = [{
    Nome: "Vendas: Orçamentos, Notas Fiscais e Cupons Eletrônicos",
    conteudo: [
        "Softshop: Autopeças - Orçamento",
        "Softshop: Autopeças - Venda",
        "Vendedores: Realize suas vendas atráves do SMobile"
    ]
},
{
    Nome: "Batismo Comercial",
    conteudo: [
        "Segmento Farmácia",
        "Conhecimento Fiscal",
        "Segimento Alimentos",
        "Segmentos Veículos"
    ]
}
]

const JsonData = JSON.stringify(APITreinamento)
const blob = new Blob([JsonData], {type: "aplication/json"})
const urlTreinamento = URL.createObjectURL(blob)

export {
    urlTreinamento
}