export default interface IConhecimentos {
    Faq: string,
    Prioridade: "Alta" | "Media" | "Baixa",
    Categoria: string,
    Titulo: string,
    CriadoPor: string,
    ValidadoPor: string,
    Texto: {
        paragrafo1: string,
        paragrafo2?: string,
        paragrafo3?: string
        paragrafo4?: string
    }
}