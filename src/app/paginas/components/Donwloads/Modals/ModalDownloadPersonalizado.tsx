import IDownloads from "@/app/Models/IDownloads"
import {motion} from "framer-motion"

interface Props{
    items: IDownloads[] | null,
    ClickCancelar?: () => void
}

export default function ModalDownloadPersonalizado({items, ClickCancelar}:Props) {

    const handleDownload = () => {
        if (items) {
            items.forEach(item => {
                console.log(item)
                window.open(item.link, '_blank');
            });
        }
    }

    return(
        <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 120 }}
        transition={{duration: 0.2}}
        className="bg-padraoCinzaE w-[90vw] md:w-[30rem] md:h-auto text-[0.8rem] md:text-[0.6rem] 2xl:text-[0.8rem] absolute p-8 flex flex-col gap-8 border-dourado border-[2px]  2xl:translate-y-[7rem]">
            <div className="text-[white] text-[1rem] font-semibold flex justify-center items-center text-center">
                <h1>
                    Deseja Baixar os seguintes items?
                </h1>
            </div>
            <div className="flex w-full h-[7rem] overflow-y-scroll scrollbar-hide flex-col gap-2">
                { items?.map(x => {
                    return(
                    <div key={x.id} className="w-full bg-padraoCinzaSC h-[5rem] flex justify-center items-center p-4 rounded-md">
                        <h1 className="text-[white] font-semibold text-center">
                            {x.nome}    
                        </h1>
                     </div>
                    )
                })
                
                }
               
            </div>
            <section className="w-full flex justify-around items-center gap-8">
                <button onClick={handleDownload} 
                    className="w-[50%] h-[3rem] md:h-[2rem] 2xl:h-[3rem] bg-dourado rounded-md text-[white] font-semibold">
                    Baixar
                </button>
                <button onClick={ClickCancelar} 
                    className="w-[50%] h-[3rem] md:h-[2rem] 2xl:h-[3rem] bg-[white] rounded-md text-[black] font-semibold">
                    Cancelar
                </button>
            </section>
        </motion.div>
    )
}