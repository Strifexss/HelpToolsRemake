import { Search } from "lucide-react"

export default function SearchBar() {
    return(
        <div className="w-[90%] md:w-[40%] h-[3rem] flex flex-row">
            <input className="w-[85%] h-full outline-none px-4 bg-padraoCinzaSC text-[white] font-semibold" 
            type="text" name="" id="" placeholder="Pesquisar Items" />
            <div className="w-[15%] h-full bg-padraoCinzaC cursor-pointer flex justify-center items-center">
                <Search color="white"/>
            </div>
        </div>
    )
}