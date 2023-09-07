import { Download } from "lucide-react"

export default function GruposItems() {
    return(
        <div className="w-full h-[4rem] bg-padraoCinzaC hover:bg-padraoCinzaE flex flex-row gap-16 justify-start px-8 cursor-pointer">
            <div className="h-full flex justify-center items-center">
                <Download color="orange"/>
            </div>
            <div className="h-full flex justify-center items-center">
                <h1 className="text-[white] font-semibold">
                    Pacote Softshop
                </h1>
            </div>
        </div>
    )
}