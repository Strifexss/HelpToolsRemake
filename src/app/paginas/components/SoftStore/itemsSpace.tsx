import Items from "./Items"

interface Props {
    valor: React.Dispatch<React.SetStateAction<number>>;
    valorNumero: number
}



export default function ItemsSpace({ valor, valorNumero}:Props) {
    return(
        <div className="w-full h-full overflow-y-scroll scrollbar-hide flex justify-center flex-wrap gap-8">
            <Items valor={valor} valorNumero={valorNumero} preco={10.00}/>
            <Items valor={valor} valorNumero={valorNumero} preco={20.00}/>
            <Items valor={valor} valorNumero={valorNumero} preco={100.00}/>
            <Items valor={valor} valorNumero={valorNumero} preco={10.00}/>
            <Items valor={valor} valorNumero={valorNumero} preco={20.00}/>
            <Items valor={valor} valorNumero={valorNumero} preco={100.00}/>
            <Items valor={valor} valorNumero={valorNumero} preco={10.00}/>
            <Items valor={valor} valorNumero={valorNumero} preco={20.00}/>
            <Items valor={valor} valorNumero={valorNumero} preco={100.00}/>
         
        </div>
    )
}