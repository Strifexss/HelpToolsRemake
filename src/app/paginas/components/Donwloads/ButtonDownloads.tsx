interface Props {
    Conteudo: string
}
export default function ButtonDownload({Conteudo}:Props) {
    return(
        <div className="w-[10rem] h-[3.5rem] rounded-2xl hover:bg-padraoCinzaC bg-padraoCinzaSC flex justify-center items-center cursor-pointer">
            <h1 className="text-[white] font-bold text-center">
                {Conteudo}
            </h1>
        </div>
    )
}