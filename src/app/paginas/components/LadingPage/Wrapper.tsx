import WrapperConteudo from "@/app/Models/WrapperConteudo"
import Link from "next/link"
interface Props {
    headerTexto: string,
    Conteudo?: WrapperConteudo[],
    hasDate?: boolean,
    hasIcon?: boolean
}

export default function Wrapper({headerTexto, Conteudo, hasDate = false, hasIcon = false}:Props) {
    return(
        <div className="w-full mb-20 md:w-[40%] 2xl:w-[30%] h-[20rem] 2xl:h-[25rem] flex-col items-center">
            <div className="w-full h-[5rem] bg-[orange] flex justify-center items-center">
                <h1 className="text-[white] text-[1.2rem] font-semibold">
                    {headerTexto}
                </h1>
            </div>
            <div className="w-full h-full bg-padraoCinzaC overflow-y-scroll scrollbar-hide">
                { 
                hasIcon &&
                Conteudo?.map(x => {
                    return(
                        <Link key={x.Texto}  href='https://www.youtube.com/watch?v=lpQhspw3FY4' target="_blank">
                        <div  className="w-full h-[4rem] bg-padraoCinzaSC hover:bg-padraoCinzaC cursor-pointer flex flex-row items-center p-4 gap-6">
                                {x.Icone}
                                <h1 className="text-[white] font-semibold">
                                    {x.Texto}
                                </h1>
                        </div>
                        </Link>
                    )
                })
                }
                {
                 hasDate &&
                 <div className="w-full h-full grid grid-cols-2 py-1">
                    <div className="flex flex-col items-center">
                        <h1 className="w-full text-center text-[white] font-bold border-b-[white] border-b-2">Produto</h1>
                      {  Conteudo?.map(x => {
                    return(
                        <div key={x.Texto} className="border-b-[white] border-b-2 w-full h-[4rem] bg-padraoCinzaSC cursor-pointer flex flex-row justify-center items-center p-4 gap-6">
                                <Link href={x.Links ? x.Links : ""}
                                target="_blank"
                                >
                                <h1 className="text-[white] text-center font-semibold">
                                    {x.Texto}
                                </h1>
                                </Link>
                        </div>
                    )
                })}
                    </div>
                    <div className=" flex flex-col items-center">
                        <h1 className="w-full text-center text-[white] font-bold border-b-[white] border-b-2">Previsão</h1>
                        {  Conteudo?.map(x => {
                    return(
                        <div key={x.Texto} className="border-b-[white] border-b-2 w-full h-[4rem] bg-padraoCinzaSC cursor-pointer flex flex-row justify-center items-center p-4 gap-6">
                                <Link href={x.Links ? x.Links : ""}
                                target="_blank">
                                <h1 className="text-[white] text-center font-semibold">
                                    {x.data}
                                </h1>
                                </Link>
                        </div>
                    )
                })}
                    </div>
                 </div>
                }
            </div>
        </div>
    )
}