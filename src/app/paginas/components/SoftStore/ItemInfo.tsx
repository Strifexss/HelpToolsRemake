import { CamisaAmerela } from "@/app/imgs/SoftStoreImgs";
import { X } from "lucide-react";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import {motion} from "framer-motion"
import { useMediaQuery } from 'react-responsive';
import ISoftStoreData from "@/app/Models/SoftStoreData";

interface Props {
    Data: ISoftStoreData | null
    Close: React.Dispatch<SetStateAction<boolean>>
}

export default function InfoModal(Props:Props) {

    
    const isMobile = useMediaQuery({ maxWidth: 640 });

    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: isMobile ? 0 : 20 }}
            transition={{duration: 0.2}} 
            className="absolute w-screen h-screen md:w-[25rem] md:h-[90%] bg-padraoCinzaSC md:translate-y-[5rem] flex flex-col overflow-y-scroll scrollbar-hide">
                <section className="w-full h-[10%] bg-dourado flex justify-end p-4 items-center">
                    <X color="white" className="cursor-pointer" onClick={() => Props.Close(false)}/>
                </section>
                <section className="w-full h-[50%] p-6">
                    <Image
                        src={Props.Data?.image ? Props.Data.image : CamisaAmerela}
                        alt={Props.Data?.nome ? Props.Data?.nome : "Item"}
                        width={1000}
                        height={1000}             
                    />
                </section>
                <section className="w-full h-auto rounded-t-[3rem] bg-padraoCinzaC flex flex-col py-4 px-6 gap-2">
                    <h1 className="font-bold text-[white] text-[1.5rem]">
                        {Props.Data?.nome}
                    </h1>
                    <p className="text-[#707070] font-semibold">
                    {Props.Data?.type}
                    </p>
                    <p className="text-dourado font-semibold">
                    {Props.Data?.preco}
                    </p>
                </section>
                <section className="w-full h-auto flex justify-center px-6 bg-padraoCinzaC">
                    <section className="w-full h-full p-6 border-t-2 border-t-[#707070] flex justify-around flex-wrap gap-2">
                        <div className="p-2 px-4 rounded-2xl border-2 border-[white]">
                            <h1 className="text-[white] font-semibold text-[0.8rem]">
                                26 Liters
                            </h1>
                        </div>
                        <div className="p-2 px-4 rounded-2xl border-2 border-[white] text-[0.8rem]">
                            <h1 className="text-[white] font-semibold">
                                Yellow
                            </h1>
                        </div>
                        <div className="p-2 px-4 rounded-2xl border-2 border-[white] text-[0.8rem]">
                            <h1 className="text-[white] font-semibold">
                                Bottle
                            </h1>
                        </div>
                    </section>
                </section>
                <section className="w-full h-auto flex justify-center px-6 bg-padraoCinzaC">
                    <section className="w-full h-full py-4 border-t-2 border-t-[#707070] flex justify-around flex-wrap gap-2">
                        <h1 className="text-[white]  text-[0.8rem] text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium modi corporis iure natus excepturi sapiente veritatis cum unde dolore in, voluptate culpa qui vel incidunt ea ut hic impedit dolores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, cumque mollitia ipsa saepe ratione corporis ea culpa voluptas? Numquam recusandae ducimus exercitationem, quos at molestias consectetur ipsa minima quia laborum!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, cumque mollitia ipsa saepe ratione corporis ea culpa voluptas? Numquam recusandae ducimus exercitationem, quos at molestias consectetur ipsa minima quia laborum!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, cumque mollitia ipsa saepe ratione corporis ea culpa voluptas? Numquam recusandae ducimus exercitationem, quos at molestias consectetur ipsa minima quia laborum!
                        </h1>
                    </section>
                </section>
            </motion.div>        
    )
}