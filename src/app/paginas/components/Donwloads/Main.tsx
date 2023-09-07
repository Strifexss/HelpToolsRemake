import SearchBar from "../SoftStore/SearchBar"
import ButtonDownload from "./ButtonDownloads"
import DownloadsItems from "./DownloadsItems"
import DownloadArea from "./DownloadArea"
import Grupos from "./Grupos"

export default function Main() {
    return(
        <div className="w-full h-full flex flex-col items-center gap-10 md:gap-8 overflow-y-scroll scrollbar-hide">
            <section className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                <SearchBar/>
            </section>
            <div className="w-full h-full flex flex-col md:flex-row gap-8">
                <DownloadArea/>
               <Grupos/>
            </div>
        </div>
    )
}