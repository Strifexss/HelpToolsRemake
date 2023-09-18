"use client"
import SearchBar from "../SoftStore/SearchBar";
import TreinoSection from "./treinoSection";

export default function Main() {

    

    return(
        <div className="h-full w-full flex flex-col gap-8">
            <SearchBar />
           <TreinoSection/>
        </div>
    )
}