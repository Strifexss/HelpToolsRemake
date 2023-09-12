import SearchBar from "../SoftStore/SearchBar"
import BaseDoConhecimento from "./baseDoConhecimento"
import WrapperMaisUtilizados from "./wrapperMaisUtilizados"

export default function Main() {
    return(
        <div className="w-full h-full flex flex-col gap-6 overflow-y-scroll scrollbar-hide">
            <SearchBar/>
            <section className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
                <WrapperMaisUtilizados/>
                <BaseDoConhecimento/>
            </section>
        </div>
    )
}