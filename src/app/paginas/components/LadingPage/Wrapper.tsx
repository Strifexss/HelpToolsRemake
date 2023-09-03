import WrapperConteudo from "@/app/Models/WrapperConteudo"

interface Props {
    headerTexto: string,
    Conteudo?: WrapperConteudo[]
}

export default function Wrapper({headerTexto, Conteudo}:Props) {
    return(
        <div className="w-full mb-20 md:w-[40%] 2xl:w-[30%] h-[20rem] 2xl:h-[25rem] flex-col items-center">
            <div className="w-full h-[5rem] bg-[orange] flex justify-center items-center">
                <h1 className="text-[white] text-[1.2rem] font-semibold">
                    {headerTexto}
                </h1>
            </div>
            <div className="w-full h-full bg-padraoCinzaC overflow-y-scroll scrollbar-hide">
                { Conteudo?.map(x => {
                    return(
                        <div key={x.Texto} className="w-full h-[4rem] bg-padraoCinzaSC hover:bg-padraoCinzaC cursor-pointer flex flex-row items-center p-4 gap-6">
                                {x.Icone}
                                <h1 className="text-[white] font-semibold">
                                    {x.Texto}
                                </h1>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}