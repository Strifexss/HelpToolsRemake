import IDownloads from "@/app/Models/IDownloads"

interface Props{
    items: IDownloads[] | null,
    ClickCancelar?: () => void
}

export default function ModalDownloadPersonalizado({items, ClickCancelar}:Props) {

    const handleDownload = () => {
        window.alert(`Download personalizado Iniciado: ${items?.map(x => {return(x.nome)})}`)
    }

    return(
        <div className="bg-padraoCinzaE w-[90vw] h-[60vh] md:w-[30rem] md:h-[30rem] absolute p-8 flex flex-col gap-8 border-dourado border-[2px]  2xl:translate-y-[7rem]">
            <div className="text-[white] text-[1.2rem] font-semibold flex justify-center items-center text-center">
                <h1>
                    Deseja Baixar os seguintes items?
                </h1>
            </div>
            <div className="flex w-full h-[60%] overflow-y-scroll scrollbar-hide flex-col gap-2">
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
                    className="w-[50%] h-[3rem] bg-dourado rounded-md text-[white] font-semibold">
                    Baixar
                </button>
                <button onClick={ClickCancelar} 
                    className="w-[50%] h-[3rem] bg-[white] rounded-md text-[black] font-semibold">
                    Cancelar
                </button>
            </section>
        </div>
    )
}