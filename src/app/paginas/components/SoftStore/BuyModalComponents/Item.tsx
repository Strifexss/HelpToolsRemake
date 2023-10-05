import { CamisaAmerela } from "@/app/imgs/SoftStoreImgs"
import Image from "next/image"

interface Props {
    Imagem: string,
    nome: string,
    Type: string,
    quantidade: number,
    valor: number
}

export default function Item(Props: Props) {
    return(
        <section className="w-full h-[6rem] md:h-[5rem] bg-padraoCinzaC p-2 flex flex-row items-center">
                    <div className="w-[60%] h-full flex flex-row items-center gap-2 overflow-hidden">
                        <Image className="w-[5rem] h-full"
                            src={Props.Imagem}
                            width={1000}
                            height={1000}
                            alt="Produto"
                        />
                        <section className="w-full flex flex-col justify-center gap-2">
                            <h1 className="text-[white] font-semibold">
                                {Props.nome}
                            </h1>
                            <p className="text-CinzaPadrao">
                                {Props.Type}
                            </p>
                    </section>
                    </div>
                    <div className="w-[40%] h-full flex flex-col md:flex-row items-center justify-center gap-4">
                        <h1 className="text-[white] font-semibold">
                            Quantidade: {Props.quantidade}                          
                        </h1>
                        <h1 className="text-[white] font-semibold">
                            Valor: {Props.valor}
                        </h1>
                    </div>
                </section>
    )
}