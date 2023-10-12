"use client"
import Image from "next/image"
import Logo  from "@/app/imgs/logo_softcom_branca.png"
import ButtonsSection from "./asideComponents/ButtonsSection"
import { useState } from "react"
import {motion} from "framer-motion"
import {LucideMenu} from "lucide-react"
export default function Aside() {

   const [show, setShow] = useState(true)

    return(
        <motion.div
        initial={{ width: "18%"}}
        animate={{ width: show ? "18%" : "5%"}}
        transition={{ duration: 0.3 }}
        className={`hidden md:flex bg-padraoCinzaC p-4 flex-col gap-10 h-screen`}
    >
        <section className="w-full flex justify-center gap-2 items-center">
            { show &&
                <Image className="p-2 rounded-md w-[90%] h-[90%]" 
                src={Logo}
                alt="Softcom"
                width={1000}
                height={1000}
            />
            }
            <LucideMenu onClick={() => setShow(!show)}
                color="white" 
                className="cursor-pointer" />         
        </section>
            <ButtonsSection show={show}/>
        </motion.div>
    )
}