import { ShoppingCart, Wallet } from "lucide-react"

interface Props {
    valor:number,
    click: () => void
}

export default function walletBuy({valor, click}:Props) {
    return(
        <div className="h-full flex justify-center items-center gap-4 cursor-pointer mt-[1.5rem] ">
                    <div className="w-[9rem] h-[3.5rem] md:h-[60%] bg-padraoCinzaSC flex flex-row justify-between items-center px-4 ">
                        <Wallet color="white" width={30} height={30}/>
                        <h1 className="text-[white]">$3000</h1>
                    </div>
                    <div onClick={click} 
                        className="w-[9rem] h-[3.5rem] md:h-[60%] bg-padraoCinzaSC flex flex-row justify-between items-center px-4 ">
                        <ShoppingCart color="white" width={30} height={30}/>
                        <h1 className="text-[white]">${valor}</h1>
                    </div>
        </div>
    )
}