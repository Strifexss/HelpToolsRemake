import Image from "next/image"
import { Logo } from "@/app/imgs/imgExport"
import ButtonsSection from "./asideComponents/ButtonsSection"

export default function Aside() {
    return(
        <div className="hidden md:w-[18%]   h-screen bg-padraoCinzaC md:p-4 2xl:p-8 md:flex flex-col gap-10">
            <Image className="bg-[white] p-2 rounded-md"
                src={Logo}
                alt="Softcom"
                width={1000}
                height={1000}
            />
            <ButtonsSection/>
        </div>
    )
}