import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  Nome: string;
  Conteudo: string[];
}

export default function BaseDoConhecimentoItems({ Nome, Conteudo }: Props) {
  const [Menu, setMenu] = useState(false);


  return (
    <section className="w-full h-auto flex flex-col">
      <div
        onClick={() => setMenu(!Menu)}
        className="w-full hover:bg-padraoCinzaE bg-padraoCinzaC h-[4rem] flex justify-between items-center gap-8 px-10 cursor-pointer"
      >
        <h1 className="text-[white] font-semibold">{Nome}</h1>
        <motion.div
            initial={false}
            animate={{ rotate: Menu ? 360 : -360 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ transformOrigin: "center" }} // Define o ponto de rotação no centro
        >
          {Menu ? <ArrowUpWideNarrow color="white" /> : <ArrowDownWideNarrow color="white" />}
        </motion.div>
      </div>
      <AnimatePresence>
        {Menu && (
          <motion.div
            className="w-full h-auto"
            initial={{ y: "-2rem", opacity: 0 }} 
            animate={{ y: "0", opacity: 1 }} 
            exit={{ y: "-2rem", opacity: 0 }} 
            transition={{ duration: 0.3 }}
          >
            {Conteudo?.map((x) => {
              return (
                <div key={x} className="w-full h-[4rem] bg-orangeButton flex justify-start items-center px-10 cursor-pointer">
                  <h1 className="text-[white] font-semibold">{x}</h1>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}