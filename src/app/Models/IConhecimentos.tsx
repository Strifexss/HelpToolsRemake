export default interface IConhecimentos {
    Faq: number,
    Prioridade: "Alta" | "Media" | "Baixa",
    Categoria: string,
    Titulo: string,
    CriadoPor: string,
    ValidadoPor: string,
    Texto?: string[],
    Image?: string[]
}