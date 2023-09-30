interface Props {
    Titulo: string,
    Conteudo: string[] | null
}

export default function WrapperTextos({Titulo, Conteudo}:Props) {
    return(
        <div className="w-full h-auto bg-padraoCinzaC rounded-xl flex flex-row">
            <div className="bg-dourado w-[1rem] md:w-[1.5rem] h-full rounded-s-xl"/>
            <div className="w-full h-full flex flex-col items-start p-6">
                <h1 className="text-dourado text-[1.2rem] font-semibold mb-6">
                    {Titulo}
                </h1>
                <section className="w-full h-full flex flex-col items-start gap-6">
                { Conteudo?.map(x => {
                    return(
                        <h1 key={x} className="text-[white] text-[1.2rem] font-semibold">
                            {x}
                        </h1>
                    )
                })
                }
                </section>
            </div>
        </div>
    )
}