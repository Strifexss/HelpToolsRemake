import IDownloads from "@/app/Models/IDownloads"
import { XCircle } from "lucide-react";
import {motion} from 'framer-motion'

interface Props {
    handleInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
    ModalData: IDownloads | null,
}

export default function ModalsInfos({handleInfoModal, ModalData}:Props) {
    return(
        <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: -150 }}
        animate={{ opacity: 1, scale: 1, x: 0, y:120 }}
        transition={{duration: 0.2}}
        className="bg-padraoCinzaE w-[30rem] h-[30rem] absolute p-8 flex flex-col gap-8 border-dourado border-[2px]  2xl:translate-y-[7rem]">
            <div className="w-full flex justify-between">
                <h1 className="text-[white] font-semibold text-[1.2rem]">
                    {ModalData?.nome}
                </h1>
               <XCircle onClick={() => handleInfoModal(false)} color="white" className="cursor-pointer"/>
            </div>
            <div className="flex w-full flex-col gap-2">
                <div className="w-full bg-padraoCinzaSC h-[4rem] flex justify-between items-center px-4">
                    <h1 className="text-[white] font-semibold">
                        ID:
                    </h1>
                    <h1 className="text-[white] font-semibold">
                        {ModalData?.id}
                    </h1>
                </div>
                <div className="w-full bg-padraoCinzaSC h-[4rem] flex justify-between items-center px-4">
                    <h1 className="text-[white] font-semibold">
                        Versão:
                    </h1>
                    <h1 className="text-[white] font-semibold">
                        {ModalData?.versão}
                    </h1>
                </div>
                <div className="w-full bg-padraoCinzaSC h-[4rem] flex justify-between items-center px-4">
                    <h1 className="text-[white] font-semibold">
                        Downloads:
                    </h1>
                    <h1 className="text-[white] font-semibold">
                        {ModalData?.Downloads}
                    </h1>
                </div>
                <div className="w-full bg-padraoCinzaSC h-[4rem] flex justify-between items-center px-4 overflow-hidden">
                    <h1 className="text-[white] font-semibold">
                        Local:
                    </h1>
                    <h1 className="text-[white] font-semibold">
                        {ModalData?.Local}
                    </h1>
                </div>
            </div>
        </motion.div>
    )
}