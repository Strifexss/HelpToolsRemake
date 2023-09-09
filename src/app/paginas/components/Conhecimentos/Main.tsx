import SearchBar from "../SoftStore/SearchBar"
import WrapperMaisUtilizados from "./wrapperMaisUtilizados"

export default function Main() {
    return(
        <div className="w-full h-full flex flex-col gap-6">
            <SearchBar/>
            <WrapperMaisUtilizados/>
        </div>
    )
}