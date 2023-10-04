import ISoftStoreData from "../Models/SoftStoreData"
import { Bone, CamisaAmerela, Caneca, GarrafaTermica, Moletom,  } from "../imgs/SoftStoreImgs"

const data:ISoftStoreData[] = [{
    nome: "Moletom",
    preco: 2500.00,
    type: "Roupa",
    image: Moletom.src
},
{
    nome: "Camisa",
    preco: 1300.00,
    type: "Roupa",
    image: CamisaAmerela.src
},
{
    nome: "Boné",
    preco: 400.00,
    type: "Roupa",
    image: Bone.src
},
{
    nome: "Caneca",
    preco: 100.00,
    type: "Item",
    image: Caneca.src
},
{
    nome: "Garrafa Inteligente",
    preco: 600,
    type: "Item",
    image: GarrafaTermica.src
},
]

const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const url = URL.createObjectURL(blob)

export {
    url
}