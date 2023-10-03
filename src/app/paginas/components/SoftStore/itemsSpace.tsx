import Items from "./Items"
import FetchDataSoftStore from "@/app/hooks/useSoftStoreData";
import ISoftStoreData from "@/app/Models/SoftStoreData";
import { useEffect, useState, useCallback, SetStateAction } from "react";


interface Props {
    valor: React.Dispatch<React.SetStateAction<number>>;
    valorNumero: number,
    HandleInfoModal: React.Dispatch<SetStateAction<boolean>>
}


export default function ItemsSpace({ HandleInfoModal, valor, valorNumero}:Props) {

    const [dados, setDados] = useState<ISoftStoreData[]| null>(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiData = await FetchDataSoftStore();
            setDados(apiData);
            console.log(apiData);
          } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
          }
        };
    
        fetchData();
      }, []);
    return(
        <div className="w-full h-full overflow-y-scroll scrollbar-hide flex justify-center flex-wrap gap-8">
            {dados?.map(x => {
                return(
                    <Items HandleInfoModal={HandleInfoModal} image={x.image} key={x.nome} nome={x.nome} type={x.type} setValor={valor} valorNumero={valorNumero} preco={x.preco}/>
                )
            })}         
        </div>
    )
}