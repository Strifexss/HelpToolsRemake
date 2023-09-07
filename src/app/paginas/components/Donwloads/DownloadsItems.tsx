import { Download, Info } from "lucide-react"

export default function DownloadsItems() {
    return(
        <div className="w-full h-[4rem] bg-padraoCinzaC  hover:bg-padraoCinzaE grid grid-cols-3 md:grid-cols-5 px-2 cursor-pointer">
            <section className="w-full h-full flex justify-center items-center">
                <Download color="orange"/>
            </section>
            <section className="w-full h-full hidden md:flex justify-center items-center">
               <h1 className="text-[white] font-semibold">
                    3561
                </h1>
            </section>
            <section className="w-full h-full flex justify-center items-center">
            <h1 className="text-[orange] font-semibold">
                    BackupCloud
                </h1>
            </section>
            <section className="w-full h-full hidden md:flex justify-center items-center">
            <h1 className="text-[white] font-semibold">
                <Info color="white" />
                </h1>
            </section>
            <section className="w-full h-full flex justify-center items-center">
            <h1 className="text-[white] font-semibold">
                    <input type="checkbox" name="" id="" />
                </h1>
            </section>
        </div>
    )
}