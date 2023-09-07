import { Download, Info } from "lucide-react"
import Link from "next/link"
import IDownloads from "@/app/Models/IDownloads"

interface Props extends IDownloads {
    handleInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
    ModalDataTransfer: React.Dispatch<React.SetStateAction<IDownloads | null>>;
}

export default function DownloadsItems({Downloads, Local, id, nome, tamanho, versão, handleInfoModal, ModalDataTransfer}:Props) {
    return(
        <div className="w-full h-[4rem] bg-padraoCinzaC  hover:bg-padraoCinzaE grid grid-cols-3 md:grid-cols-5 px-2 cursor-pointer">
            <section className="w-full h-full flex justify-center items-center">
                <Link href={"http://177.43.232.3:10000/helptools2/public/arquivo"} target="_blank">
                    <Download color="orange"/>
                </Link>
            </section>
            <section className="w-full h-full hidden md:flex justify-center items-center">
               <h1 className="text-[white] font-semibold">
                    {id}
                </h1>
            </section>
            <section className="w-full h-full flex justify-center items-center">
            <h1 className="text-[orange] font-semibold text-center">
                    {nome}
                </h1>
            </section>
            <section className="w-full h-full hidden md:flex justify-center items-center">
            <h1 onClick={() => {handleInfoModal(true), ModalDataTransfer({id: id, nome: nome,})}}
                className="text-[white] font-semibold">
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