interface Props {
    Titulo: string
}

export default function WrapperTextos({Titulo}:Props) {
    return(
        <div className="w-full h-auto bg-padraoCinzaC rounded-xl flex flex-row">
            <div className="bg-dourado w-[1.5rem] h-full rounded-s-xl"/>
            <div className="w-full h-full flex flex-col items-start p-6">
                <h1 className="text-[white] text-[1.2rem] font-semibold mb-6">
                    {Titulo}
                </h1>
                <h1 className="text-[white] text-[1.2rem] font-semibold">
                01-Gestão do Estoque:
                *Analise da rotatividade de vendas para geração de pedido de compra automático *Formação de preço com a substituição tributária, uso TVA ou MVA *Balanço com uso coletor, clientes com várias mercadorias cadastradas *Criação de várias tabelas de preços
                </h1>
            </div>
        </div>
    )
}