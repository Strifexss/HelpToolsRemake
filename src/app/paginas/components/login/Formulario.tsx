import Image from "next/image"
import Logo from "@/app/imgs/logo_softcom_branca.png"
import TextArea from "./components/textArea"
export default function Formulario() {
    return(
        <div className="w-screen h-screen md:w-[45%] md:h-full bg-[black] p-8 md:p-10 2xl:p-20">
            <div className="w-full h-full flex flex-col items-start justify-center gap-10">
                <div className="w-full flex justify-center items-center">
                <Image className="md:w-[15rem] md:h-[3rem] 2xl:w-[20rem] 2xl:h-[4rem]"
                    src={Logo}
                    width={1000}
                    height={1000}
                    alt="Softcom"
                />
                </div>
                <h1 className="text-[white] font-bold text-[2rem] md:text-[1.5rem] 2xl:text-[2.5rem]">
                    Login
                </h1>
                <TextArea/>
            </div>
        </div>
    )
}