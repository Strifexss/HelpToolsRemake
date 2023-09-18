interface Conteudo {
    nome: string,
    Link: string
}

export default interface ITreinamento {
    Nome: string,
    conteudo: Conteudo[]
    
}