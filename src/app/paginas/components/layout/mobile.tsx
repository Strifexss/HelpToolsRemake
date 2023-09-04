"use client"
import MainMenu from "./mobileComponents/MainMenu";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Mobile() {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return(
        <>
        <div className="w-full h-[4rem] fixed bg-padraoCinzaC md:hidden flex items-center px-4 justify-between">
            <h1 className="text-[white] font-bold text-[1.5rem]">
                Softcom
            </h1>
            <Menu onClick={() => setShowMenu(!showMenu)} 
                className="w-[2rem] h-[2rem]" 
                color="white"/> 
        </div>
        {
            showMenu &&
                <MainMenu Close={() => setShowMenu(!showMenu)}/>
        }
        </>
    )
}