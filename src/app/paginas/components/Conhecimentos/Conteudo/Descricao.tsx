import IConhecimentos from "@/app/Models/IConhecimentos"
import Image from "next/image"

interface Props {
    Data: IConhecimentos | null
}

export default function Descricao({Data}:Props) {

    return(
        <div className="w-full h-auto md:h-full bg-padraoCinzaSC flex flex-col rounded-md md:overflow-y-scroll scrollbar-hide">
        <div className="w-full h-[5rem] bg-dourado flex justify-center items-center rounded-t-md">
            <h1 className="font-semibold text-[white] text-[1.5rem]">
                Descrição
            </h1>
        </div>
        <div className="w-full flex flex-col items-start gap-8 p-8">
        {   Data?.Texto?.map(x => {
            return(
                <h1 key={x} className="text-[white] font-semibold">
                    {x}
                </h1>
            )
        })
        }
        {
            Data?.Image?.map(x => {
                return(
                    <Image className="w-full h-full"
                        key={x}
                        src={x}
                        alt="Imagem"
                        width={1000}
                        height={1000}
                    />
                )
            })
        }
        </div>
    </div>
    )
}