import { Download } from "lucide-react"

interface Props {
    conteudo: string
}

export default function GruposItems({conteudo}:Props) {
    return(
        <div className="w-full h-[4rem] bg-padraoCinzaC hover:bg-padraoCinzaE flex flex-row gap-16 justify-start px-8 cursor-pointer">
            <div className="h-full flex justify-center items-center">
                <Download color="orange"/>
            </div>
            <div className="h-full flex justify-center items-center">
                <h1 className="text-[white] font-semibold">
                    {conteudo}
                </h1>
            </div>
        </div>
    )
}