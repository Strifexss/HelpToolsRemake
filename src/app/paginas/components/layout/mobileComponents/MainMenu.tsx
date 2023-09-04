import { X } from "lucide-react"
import Items from "./Items"
interface Props {
    Close: () => void
}

export default function MainMenu({Close}:Props) {

    return(
        <div className="absolute w-screen h-screen bg-padraoCinzaC p-8 overflow-y-scroll scrollbar-hide">
            <section className="w-full flex flex-row items-center justify-between">
                <h1 className="text-[1.5rem] text-[white] font-bold">Softcom</h1>
                <X color="white" onClick={Close}/>
            </section>
            <Items/>
        </div>
    )
}