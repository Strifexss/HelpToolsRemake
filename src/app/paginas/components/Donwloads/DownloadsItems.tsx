import { Download, Info } from "lucide-react"
import Link from "next/link"
import IDownloads from "@/app/Models/IDownloads"
import {useState} from "react"

interface Props extends IDownloads {
    handleInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
    ModalDataTransfer: React.Dispatch<React.SetStateAction<IDownloads | null>>;
    CheckedItems: React.Dispatch<React.SetStateAction<IDownloads[] | null>>;
    CheckedItemsArray: IDownloads[] | null;
}

export default function DownloadsItems({Downloads, Local, id, nome, link,tamanho, versão, handleInfoModal, ModalDataTransfer, CheckedItems, CheckedItemsArray}:Props) {

    const [ItemChecked, setItemChecked] = useState<boolean>(false)

    const handleItemBox = () => {
        setItemChecked(!ItemChecked);
        if (CheckedItemsArray) {
          const novoItem: IDownloads = { id, nome, link }; 
          
          const itemIndex = CheckedItemsArray.findIndex(item => item.id === novoItem.id);
      
          if (itemIndex === -1) {
            CheckedItems([...CheckedItemsArray, novoItem]);
          } else {
            const novoArray = [...CheckedItemsArray];
            novoArray.splice(itemIndex, 1);
            CheckedItems(novoArray);
          }
      
          console.log(CheckedItemsArray);
        }
    };
      
      
    return(
        <div className="w-full h-[4rem] bg-padraoCinzaC  hover:bg-padraoCinzaE grid grid-cols-3 md:grid-cols-5 px-2 cursor-pointer">
            <section className="w-full h-full flex justify-center items-center">
                <Link href={link} target="_blank">
                    <Download color="orange" className="w-[1.5rem] md:w-[1.2rem] 2xl:w-[1.5rem]"/>
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
            <h1 onClick={() => {handleInfoModal(true), ModalDataTransfer({id: id, nome: nome, versão: versão, Downloads: Downloads, Local: Local, tamanho: tamanho, link: link})}}
                className="text-[white] font-semibold">
                <Info color="white" className="w-[1.5rem] md:w-[1.2rem] 2xl:w-[1.5rem]"/>
                </h1>
            </section>
            <section className="w-full h-full flex justify-center items-center">
            <h1 className={`${ItemChecked ? "text-[orange]" : "text-[white]"} font-semibold`} 
                onClick={() => {handleItemBox()}}>
                   {ItemChecked ? "Remover" : "Adicionar"}
                </h1>
            </section>
        </div>
    )
}