import IBaseConhecimento from "../Models/IBaseConhecimento"

const data:IBaseConhecimento[] = [{
    Grupo: "Area Cliente",
    SubGrupo: ["Alteracoes", "Boleto", "Dashboard", "Nfe", "Palm"],
},{
    Grupo: "Area Cliente Softcom",
    SubGrupo: ["Alterações", "Aplicativos", "Banco de Dados", "Checar"],
},
{
    Grupo: "Area Contador",
    SubGrupo: ["Cadastros", "Softshop"],
},
{
    Grupo: "Atualizador de Objetos",
    SubGrupo: ["Aplicativos", "Banco de Dados"],
},
{
    Grupo: "Comanda Eletrônica Android",
    SubGrupo: ["Restaurante"],
},
{
    Grupo: "Diversos",
    SubGrupo: ["Nfce", "Palm", "Ped", "Ped Web", "Sped", "Externo"],
}]



const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const urlBaseConhecimentos = URL.createObjectURL(blob)

export {
    urlBaseConhecimentos
}