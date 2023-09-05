import ISoftStoreData from "../Models/SoftStoreData"
import { Logo } from "../imgs/imgExport"

const data:ISoftStoreData[] = [{
    nome: "Calça",
    preco: 100.00,
    type: "Roupa",
    image: Logo.src
}]

const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const url = URL.createObjectURL(blob)

export {
    url
}