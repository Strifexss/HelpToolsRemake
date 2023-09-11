interface Props {
    texto1: string | undefined,
    texto2: string | undefined,
    texto3: string | undefined,
    texto4: string | undefined
}

export default function Descricao({texto1, texto2, texto3, texto4}:Props) {

    return(
        <div className="w-full h-full bg-padraoCinzaSC flex flex-col rounded-md overflow-y-scroll scrollbar-hide">
        <div className="w-full h-[5rem] bg-dourado flex justify-center items-center rounded-t-md">
            <h1 className="font-semibold text-[white] text-[1.5rem]">
                Descrição
            </h1>
        </div>
        <div className="w-full flex flex-col items-start gap-8 p-8">
        <h1 className="text-[white] font-semibold">
            {texto1}
        </h1>
        <h1 className="text-[white] font-semibold">
            {texto2}
        </h1>
        <h1 className="text-[white] font-semibold">
            {texto3}
        </h1>
        <h1 className="text-[white] font-semibold">
            {texto4}
        </h1>
        </div>
    </div>
    )
}