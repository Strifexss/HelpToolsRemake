import Image from "next/image"
import Logo from "@/app/imgs/logo_softcom.png"
import InputText from "./components/inputText"
import Button from "./components/Button"

export default function Formulario() {
    return(
        <div className="w-screen h-screen md:w-[40%] md:h-full bg-[black] p-8 md:p-16 2xl:p-20 overflow-y-scroll scrollbar-hide">
            <div className="w-full h-full flex flex-col items-start justify-center gap-10">
                <Image className="w-[17rem] h-[3.5rem]"
                    src={Logo}
                    width={1000}
                    height={1000}
                    alt="Softcom"
                />
                <h1 className="text-[white] font-bold text-[2rem] 2xl:text-[2.5rem]">
                    Login
                </h1>
                <section className="w-full flex flex-col justify-start gap-8">
                    <h1 className="text-[red] font-bold text-[0.8rem] hidden">Usuario ou senha incorreto</h1>
                    <InputText Placeholder="Insira o seu Email:" Type="text" name="Email:"/>
                    <InputText Placeholder="Insira a sua Senha:" Type="password" name="Password:"/>
                    <a className="text-[#909090] hover:text-[white] cursor-pointer text-[0.8rem]">
                        Esqueceu a Senha?
                    </a>
                    <Button/>
                </section>
            </div>
        </div>
    )
}