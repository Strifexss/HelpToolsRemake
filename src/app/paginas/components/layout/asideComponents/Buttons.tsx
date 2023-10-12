
interface Props {
    Conteudo: string,
    Icone?: React.ReactNode,
    InPage?: boolean,
    hasBackground?: boolean,
    Click?: () => void,
    BackgroundOrange?: boolean,
    show: boolean
}

export default function Buttons({show, BackgroundOrange = false,InPage = false, Conteudo, Icone, hasBackground = false, Click}:Props) {
    return(
        <>
            <button onClick={Click} 
                className={`w-full h-[2.5rem] md:h-[2rem] 2xl:h-[2.5rem] mt-4 ${hasBackground && "bg-padraoCinzaSC"} ${BackgroundOrange && "bg-dourado"}  ${BackgroundOrange ? "hover:bg-amareloPadrao" : "hover:bg-padraoCinzaE"} rounded-md text-[white]  flex ${show ? "justify-start" : "justify-center"} items-center gap-4 px-2`}>
                {
                    Icone
                }
                { show &&
                <h1 className={`md:text-[0.8rem] 2xl:text-[1rem] font-semibold ${InPage ? "text-dourado" : "text-[white]"}`}>
                    {Conteudo}
                </h1>
                }
            </button>
        </>
    )
}