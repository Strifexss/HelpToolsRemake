import {X} from "lucide-react"

interface Props {
    clickCancelar: () => void
}

export default function Header(Props:Props) {
    return(
        <header className="h-[5rem] w-full bg-dourado flex justify-between items-center p-6">
        <h1 className="text-[white] font-bold">
            Carrinho
        </h1>
        <X color="white" className="cursor-pointer" onClick={Props.clickCancelar}/>
    </header>
    )
}