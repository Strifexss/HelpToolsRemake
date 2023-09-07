import SearchBar from "../SoftStore/SearchBar"
import ButtonDownload from "./ButtonDownloads"
import Grupos from "./Grupos"
import DownloadsItems from "./DownloadsItems"
import DownloadArea from "./DownloadArea"

export default function Main() {
    return(
        <div className="w-full h-full flex flex-col items-center gap-10 md:gap-8 overflow-y-scroll scrollbar-hide">
            <section className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                <SearchBar/>
            </section>
            <div className="w-full h-full flex flex-col md:flex-row gap-8">
                <DownloadArea/>
                <section className=" w-full md:w-[40%] h-full flex flex-col gap-8">
                    <section className="w-full h-[50%] bg-padraoCinzaSC flex flex-row overflow-x-scroll scrollbar-hide gap-4 rounded-md">
                        <section className="w-full h-full flex flex-row flex-wrap">
                        <h1>Checkbox</h1>
                        <input type="checkbox" id="meuCheckbox" name="meuCheckbox"/>
                        </section>
                    </section>
                    <section className="w-full h-[50%] bg-padraoCinzaSC flex flex-row overflow-x-scroll scrollbar-hide gap-4 rounded-md">

                    </section>
                </section>
            </div>
        </div>
    )
}