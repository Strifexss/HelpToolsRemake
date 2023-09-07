import DownloadsItems from "./DownloadsItems";

export default function DownloadArea(){
    return(
        <section className="h-full md:h-[100%] 2xl:h-[100%] w-full md:w-[60%] bg-padraoCinzaSC rounded-md flex flex-col">
<div className="w-full bg-dourado h-[5rem]  flex justify-center items-center">
    <h1 className="md:text-[1.5rem] font-semibold text-[white] text-center">
        Arquivos disponiveis para download
    </h1>
</div>
<div className="w-full h-full overflow-y-scroll scrollbar-hide">
    <div className="w-full h-[3rem] border-b-padraoCinzaE border-b-[2px] grid grid-cols-3 md:grid-cols-5 px-2">
        <h1 className="text-[white] font-semibold flex justify-center items-center">Download</h1>
        <h1 className="text-[white] font-semibold md:flex justify-center items-center hidden">ID</h1>
        <h1 className="text-[white] font-semibold flex justify-center items-center">Nome</h1>
        <h1 className="text-[white] font-semibold hidden md:flex justify-center items-center" >Versão</h1>
        <h1 className="text-[white] font-semibold flex justify-center items-center">Informações</h1>
    </div>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
        <DownloadsItems/>
</div>
</section>
    )
}
