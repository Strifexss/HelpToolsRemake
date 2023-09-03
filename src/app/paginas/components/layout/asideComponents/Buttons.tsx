
interface Props {
    Conteudo: string,
    Icone?: React.ReactNode,
    hasBackground?: boolean,
    Click?: () => void
}

export default function Buttons({Conteudo, Icone, hasBackground = false, Click}:Props) {
    return(
        <>
            <button onClick={Click} 
                className={`w-full md:h-[2rem] 2xl:h-[2.5rem] mt-4 ${hasBackground && "bg-padraoCinzaSC"}  hover:bg-padraoCinzaE rounded-md text-[white]  flex justify-start items-center gap-4 px-2`}>
                {
                    Icone
                }
                <h1 className="md:text-[0.8rem] 2xl:text-[1rem] font-semibold">
                    {Conteudo}
                </h1>
            </button>
        </>
    )
}