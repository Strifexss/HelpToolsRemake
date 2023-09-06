import Carregando from "@/app/imgs/Spinner-1s-200px.svg"
import Image from "next/image"
interface Props {
    content: string,
    Click: () => void,
    loading: boolean
}

export default function Button({content, Click, loading}:Props) {
    return(
        <div className="w-full">
            <button onClick={() => Click()} 
                className="w-full h-[3rem] md:h-[2.5rem] 2xl:h-[3.5rem] rounded-md bg-amareloPadrao hover:bg-[#b8a54a] transition-[0.1s]">
                <h1 className="text-[white] font-bold text-[1.5rem] flex justify-center items-center">
                    {loading == true ? <Image src={Carregando} alt="Carregando" className="md:h-[2.5rem] 2xl:w-[4rem] 2xl:h-[4rem]" /> : content}
                </h1>
            </button>
        </div>
    )
}