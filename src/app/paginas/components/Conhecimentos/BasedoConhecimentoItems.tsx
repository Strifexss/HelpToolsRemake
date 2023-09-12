import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react"

interface Props {
    Nome: string,
    Conteudo: string[],
    Menu: boolean,
    Click: () => void
}

export default function BaseDoConhecimentoItems({Nome, Click, Conteudo, Menu}:Props) {

    return(
        <section  className="w-full h-auto flex flex-col" >
            <div onClick={Click} className="w-full hover:bg-padraoCinzaE bg-padraoCinzaC h-[4rem] flex justify-between items-center gap-8 px-10 cursor-pointer">
                <h1 className="text-[white] font-semibold">
                    {Nome}
                </h1>
                {
                    Menu ? <ArrowUpWideNarrow color="white"/> : <ArrowDownWideNarrow color="white" />   
                }
                
            </div>
            {  Menu &&
                Conteudo?.map(x => {
                    return(
                        <div key={x} className="w-full h-[4rem] bg-orangeButton flex justify-start items-center px-10 cursor-pointer">
                            <h1 className="text-[white] font-semibold">
                                {x}
                            </h1>    
                        </div>
                    )
                })
            }
            
        </section>
    )
}