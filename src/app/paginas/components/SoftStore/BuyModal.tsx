import Item from "./BuyModalComponents/Item"
import Header from "./BuyModalComponents/Header"
import {motion} from "framer-motion"
import { useMediaQuery } from "react-responsive";

interface Props {
    clickCancelar: () => void
}

export default function BuyModal({clickCancelar}:Props) {

    const isMobile = useMediaQuery({ maxWidth: 640 });

    return(
    <motion.div
    initial={{ opacity: 0, scale: 0.8, y: -50 }}
    animate={{ opacity: 1, scale: 1, y: isMobile ? 0 : 70 }}
    transition={{duration: 0.2}} 
    className=" w-screen h-screen md:w-[45rem] md:h-auto bg-padraoCinzaSC absolute flex flex-col">
       <Header clickCancelar={clickCancelar}/>
        <div className="w-full h-full p-6 flex flex-col gap-4">
            <div className="h-[70%] w-full flex flex-col gap-2">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
            <div className="h-[30%] border-t-[1px] border-t-CinzaPadrao w-full flex flex-col items-end justify-center gap-4">
                <section className="w-full flex flex-col items-end justify-center mt-2">
                    <h1 className="bg-dourado text-[white] p-2 font-bold">
                        Total: $999,99
                    </h1>
                </section>
                <section className="w-full flex justify-end items-center gap-2">
                    <button onClick={clickCancelar} 
                    className="p-2 bg-CinzaPadrao text-[white] font-semibold">
                        Voltar a SoftStore
                    </button>
                    <button className="p-2 bg-dourado text-[white] font-semibold">
                        Comprar
                    </button>
                </section>
            </div>
        </div>
    </motion.div>
    )
}