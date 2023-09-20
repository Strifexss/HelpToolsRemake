interface Props {
    TextoPrincipal: string
}

export default function FiltroItem({TextoPrincipal}:Props) {
    return(
        <section className="h-full flex flex-col md:grid grid-cols-3 p-2 md:px-2  justify-items-center items-start md:items-center gap-4 bg-padraoCinzaSC rounded-md">
        <h1 className="text-[white] font-semibold">
            {TextoPrincipal}
        </h1>
        <section>
            <select className="w-[10rem] bg-padraoCinzaC text-[white] font-semibold p-1">
                <option 
                value="Alimentos">
                    Alimentos
                </option>
            </select>
        </section>
        <h1 className="text-dourado font-semibold">
            Neste Segmento hoje nós temos: 655 Clientes
        </h1>
    </section>
    )
}