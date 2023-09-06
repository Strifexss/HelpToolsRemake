import SearchBar from "../SoftStore/SearchBar"
import ButtonDownload from "./ButtonDownloads"
import Grupos from "./Grupos"

export default function Main() {
    return(
        <div className="w-full h-full flex flex-col items-center gap-10 md:gap-8 overflow-y-scroll scrollbar-hide">
            <section className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                <SearchBar/>
                <section className="flex flex-row gap-4 items-center">
                    <ButtonDownload Conteudo="Donwload Personalizado"/>
                    <ButtonDownload Conteudo="Gerenciar grupos"/>
                </section>
            </section>
            <div className="w-full h-full flex flex-col md:flex-row gap-8">
                <section className="h-full md:h-[100%] 2xl:h-[100%] w-full md:w-[60%] bg-padraoCinzaSC rounded-md flex flex-col">
                    <div className="w-full bg-dourado h-[5rem]  flex justify-center items-center">
                        <h1 className="text-[1.5rem] font-semibold text-[white] text-center">
                            Arquivos disponiveis para download
                        </h1>
                    </div>
                </section>
                <section className=" w-full md:w-[40%] h-full flex flex-col gap-8">
                    <section className="w-full h-[50%] bg-padraoCinzaSC flex flex-row overflow-x-scroll scrollbar-hide gap-4 rounded-md">

                    </section>
                    <section className="w-full h-[50%] bg-padraoCinzaSC flex flex-row overflow-x-scroll scrollbar-hide gap-4 rounded-md">

                    </section>
                </section>
            </div>
        </div>
    )
}