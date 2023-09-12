import { X } from "lucide-react"
import Items from "./Items"
import {motion, AnimatePresence} from "framer-motion"

interface Props {
    Close: () => void
}

export default function MainMenu({Close}:Props) {

    return(
        <AnimatePresence>
            <motion.div
                initial={{y: "-100vh"}} 
                animate={{y: 0}}
                exit={{y: "-100vh"}}
                transition={{duration: 0.3}}
                className="absolute w-screen h-screen bg-padraoCinzaC p-8 overflow-y-scroll scrollbar-hide">
                    <section className="w-full flex flex-row items-center justify-between">
                        <h1 className="text-[1.5rem] text-[white] font-bold">Softcom</h1>
                        <X color="white" onClick={Close}/>
                    </section>
                    <Items/>
            </motion.div>
        </AnimatePresence>
    )
}