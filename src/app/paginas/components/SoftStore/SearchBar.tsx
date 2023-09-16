import { Search } from "lucide-react"

interface Props {
    TextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({TextChange}:Props) {

    return(
        <div className="w-[100%] md:w-[40%]  h-[4rem] md:h-[3.5rem] 2xl:h-[4rem] flex flex-row">
            <input onChange={TextChange} 
                className="w-[85%] h-full outline-none px-4 bg-padraoCinzaSC text-[white] font-semibold" 
                type="text" name="" id="" placeholder="Pesquisar Items" />
            <div className="w-[15%] h-full bg-padraoCinzaC cursor-pointer flex justify-center items-center">
                <Search color="white"/>
            </div>
        </div>
    )
}