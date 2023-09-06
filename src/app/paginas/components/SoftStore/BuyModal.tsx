interface Props {
    clickCancelar: () => void
}

export default function BuyModal({clickCancelar}:Props) {
    return(
        <div className=" flex flex-col gap-4 w-[90%] md:w-[20rem] h-[80%] md:h-[30rem] bg-padraoCinzaSC absolute border-[orange] border-[2px] p-8 rounded-xl">
            <div className="w-full h-[70%] bg-padraoCinzaC rounded-xl p-4 overflow-scroll scrollbar-hide">
                <h1 className="text-[white]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, reprehenderit? Distinctio nisi praesentium temporibus quod molestiae quidem quia deleniti explicabo aliquid, nesciunt, totam odio? Rerum maiores quos quidem quam provident?</h1>
            </div>
            <button onClick={clickCancelar} 
                className="w-full h-[3rem] bg-[white] rounded-xl text-[black] font-bold">
                <h1>Cancelar</h1>
            </button>
            <button className="w-full h-[3rem] bg-[orange] rounded-xl text-[white] font-bold">
                <h1>Comprar</h1>
            </button>
        </div>
    )
}