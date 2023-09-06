import ISoftStoreData from "../Models/SoftStoreData"
import { Logo, Banner } from "../imgs/imgExport"

const data:ISoftStoreData[] = [{
    nome: "Moletom",
    preco: 2500.00,
    type: "Roupa",
    image: Banner.src
},
{
    nome: "Camisa",
    preco: 1300.00,
    type: "Roupa",
    image: Banner.src
},
{
    nome: "Boné",
    preco: 400.00,
    type: "Roupa",
    image: Banner.src
},
{
    nome: "Caneca",
    preco: 100.00,
    type: "Item",
    image: Logo.src
},
{
    nome: "Garrafa",
    preco: 600,
    type: "Item",
    image: Logo.src
},
{
    nome: "Garrafa Inteligente",
    preco: 900,
    type: "Item",
    image: Logo.src
},
{
    nome: "Calça",
    preco: 100.00,
    type: "Roupa",
    image: Logo.src
},
{
    nome: "Calça",
    preco: 100.00,
    type: "Roupa",
    image: Logo.src
},
{
    nome: "Calça",
    preco: 100.00,
    type: "Roupa",
    image: Logo.src
},

]

const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const url = URL.createObjectURL(blob)

export {
    url
}