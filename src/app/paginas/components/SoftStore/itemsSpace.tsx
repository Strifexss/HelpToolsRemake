import Items from "./Items"

interface Props {
    aumentarValor: () => void,
    diminuirValor: () => void
}



export default function ItemsSpace({aumentarValor, diminuirValor}:Props) {
    return(
        <div className="w-full h-full overflow-y-scroll scrollbar-hide flex justify-center flex-wrap gap-8">
            <Items aumentarValor={aumentarValor} diminuirValor={diminuirValor}/>
            <Items aumentarValor={aumentarValor} diminuirValor={diminuirValor}/>
            <Items aumentarValor={aumentarValor} diminuirValor={diminuirValor}/>
            <Items aumentarValor={aumentarValor} diminuirValor={diminuirValor}/>
            <Items aumentarValor={aumentarValor} diminuirValor={diminuirValor}/>
            <Items aumentarValor={aumentarValor} diminuirValor={diminuirValor}/>
            <Items aumentarValor={aumentarValor} diminuirValor={diminuirValor}/>
            <Items aumentarValor={aumentarValor} diminuirValor={diminuirValor}/>

        </div>
    )
}