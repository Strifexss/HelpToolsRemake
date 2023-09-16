"use client"
import { ArrowDownWideNarrow, ArrowUpWideNarrow, Folder } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IConhecimentos from "@/app/Models/IConhecimentos";
import useBaseConhecimentoData from "@/app/hooks/Conhecimento/useBaseConhecimentoData";
import FetchConhecimentosData from "@/app/hooks/Conhecimento/useConhecimentosData";
import useFilterBaseDoConhecimento from "@/app/hooks/Conhecimento/useFilterBaseConhecimento";

interface Props {
  Grupo: string;
  Conteudo: string[];
  SecondaryData: IConhecimentos[]  | null;
  PrimaryData: IConhecimentos[]  | null;
  setDataSecondary: React.Dispatch<React.SetStateAction<IConhecimentos[] | null>>;
  
}

export default function BaseDoConhecimentoItems({ Grupo, Conteudo, setDataSecondary, SecondaryData, PrimaryData }: Props) {

  const [Menu, setMenu] = useState(false);

  function Trocar(Grupo: string) {
    useFilterBaseDoConhecimento({SecondaryData, setDataSecondary, PrimaryData, Grupo})
  }
  
  return (
    <section className="w-full h-auto flex flex-col">
      <div
        onClick={() => setMenu(!Menu)}
        className="w-full hover:bg-padraoCinzaE bg-padraoCinzaC h-[4rem] flex justify-between items-center gap-8 px-10 cursor-pointer"
      >
        <Folder color="white"/>
        <h1 className="text-[white] font-semibold text-center">{Grupo}</h1>
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
            transition={{ duration: 0.2 }}
          >
            {Conteudo?.map((x) => {
              return (
                <div onClick={() => Trocar(x)}
                  key={x} 
                  className="w-full h-[4rem] hover:bg-[orange] bg-orangeButton flex justify-center items-center px-10 cursor-pointer">
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