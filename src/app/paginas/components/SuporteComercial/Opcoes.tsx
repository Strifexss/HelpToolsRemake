interface Regiao {
        Estado: string,
        Cidades: string[]
}

const Segmento:string[] = [
    "Alimentos",
    "Angiologista"
]

const Regiao:Regiao[] = [
    {
        Estado: "PB",
        Cidades: ["João Pessoa", "Santa Rita", "Juazeirinho", "Patos"]
    },
    {
        Estado: "PE",
        Cidades: ["Recife", "Bom Jardim"]
    }
]

export {
    Segmento, Regiao
}