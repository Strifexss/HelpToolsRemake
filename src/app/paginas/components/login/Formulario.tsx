import Image from "next/image"
import Logo from "@/app/imgs/logo_softcom.png"
import InputText from "./components/inputText"
import Button from "./components/Button"

export default function Formulario() {
    return(
        <div className="w-[40%] h-full bg-[black] 2xl:p-20 md:p-8">
            <div className="w-full h-full flex flex-col items-start justify-center gap-10">
                <Image className="w-[17rem] h-[3.5rem]"
                    src={Logo}
                    width={1000}
                    height={1000}
                    alt="Softcom"
                />
                <h1 className="text-[white] font-bold text-[2.5rem]">
                    Login
                </h1>
                <section className="w-full flex flex-col justify-start gap-8">
                    <InputText Placeholder="Insira o seu Email:" Type="text" name="Email:"/>
                    <InputText Placeholder="Insira a sua Senha:" Type="password" name="Password:"/>
                    <h1 className="text-[#909090] hover:text-[white] cursor-pointer">
                        Esqueceu a Senha?
                    </h1>
                    <Button/>
                </section>
            </div>
        </div>
    )
}