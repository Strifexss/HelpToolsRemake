import Valor from "../Models/IBUYsoftstoreData"
import ISoftStoreData from "../Models/SoftStoreData"
import { Bone, CamisaAmerela, Caneca, GarrafaTermica, Moletom,  } from "../imgs/SoftStoreImgs"

const data:Valor[] = [{
    nome: "Moletom",
    preco: 2500.00,
    type: "Roupa",
    image: Moletom.src,
    quantiade: 0 
},
{
    nome: "Camisa",
    preco: 1300.00,
    type: "Roupa",
    image: CamisaAmerela.src,
    quantiade: 0
},
{
    nome: "Boné",
    preco: 400.00,
    type: "Roupa",
    image: Bone.src,
    quantiade: 0
},
{
    nome: "Caneca",
    preco: 100.00,
    type: "Item",
    image: Caneca.src,
    quantiade: 0
},
{
    nome: "Garrafa Inteligente",
    preco: 600,
    type: "Item",
    image: GarrafaTermica.src,
    quantiade: 0
},
]

const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const url = URL.createObjectURL(blob)

export {
    url
}