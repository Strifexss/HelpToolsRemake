import IBaseConhecimento from "../Models/IBaseConhecimento"

const data:IBaseConhecimento[] = [{
    Nome: "Area Cliente",
    Conteudo: ["Alterações", "Boleto", "Dashboard", "Nfe", "Palm"],
},{
    Nome: "Area Cliente Softcom",
    Conteudo: ["Alterações", "Aplicativos", "Banco de Dados", "Checar"],
},
{
    Nome: "Area Contador",
    Conteudo: ["Cadastros", "Softshop"],
},
{
    Nome: "Atualizador de Objetos",
    Conteudo: ["Aplicativos", "Banco de Dados"],
},
{
    Nome: "Comanda Eletrônica Android",
    Conteudo: ["Restaurante"],
},
{
    Nome: "Diversos",
    Conteudo: ["Nfce", "Palm", "Ped", "Ped Web", "Sped", "Externo"],
}]



const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const urlBaseConhecimentos = URL.createObjectURL(blob)

export {
    urlBaseConhecimentos
}