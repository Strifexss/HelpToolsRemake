import ICarrinho from "@/app/Models/ICarrinho";
import { SetStateAction } from "react";
import CarregandoCompra from "@/app/imgs/CarregandoCompra.svg"
import {useState} from "react"
import Image from "next/image";

interface Props {
    setConfirmBuyModal: React.Dispatch<SetStateAction<boolean>>,
    ItemsValorTotal: ICarrinho | null,
    setCarteira: React.Dispatch<SetStateAction<number>>,
    setCarrinho: React.Dispatch<SetStateAction<ICarrinho | null>>
}

export default function ConfirmBuyModalComponent(Props:Props) {

    const [carregar, setCarregar] = useState(false)
    
    function Confirmar() {  
        const Valor = Props.ItemsValorTotal?.ValorTotal ? Props.ItemsValorTotal.ValorTotal : 0;
        setCarregar(true);
        Props.setCarteira(prevState => prevState - Valor);
        Props.setCarrinho(null);
    
        setTimeout(() => {
            setCarregar(false); // Após 3 segundos, define o carregamento como false
            Props.setConfirmBuyModal(false);
            window.alert("Items comprados");
        }, 3000); // 3000 milissegundos = 3 segundos
    }

    return(
        <div className="w-auto h-auto bg-padraoCinzaC border-dourado border-2 rounded-md absolute translate-y-52 flex flex-col justify-center items-center p-6 gap-6">
        <h1 className="text-[white] font-semibold">
            Deseja finalizar a compra?
        </h1>
        <section className="w-full h-full flex items-center justify-around">
            <button onClick={() => Props.setConfirmBuyModal(false)}
             className="bg-[#b43e3e] text-[white] font-semibold py-2 px-6">
                Não
            </button>
            <button onClick={() => Confirmar()}
             className="bg-dourado text-[white] font-semibold py-2 px-6">
                Sim
            </button>
            {   carregar &&
                 <div className="w-full h-full absolute">
                 <Image className="w-full h-full -translate-y-6"
                     src={CarregandoCompra}
                     alt="Carregando"
                     width={1000}
                     height={1000}
                 />
             </div>
            }
        </section>
    </div>
    )
}