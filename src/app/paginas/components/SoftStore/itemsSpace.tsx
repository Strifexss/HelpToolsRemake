import Items from "./Items"
import FetchDataSoftStore from "@/app/hooks/useSoftStoreData";
import ISoftStoreData from "@/app/Models/SoftStoreData";
import { useEffect, useState, useCallback, SetStateAction } from "react";


interface Props {
    valor: React.Dispatch<React.SetStateAction<number>>;
    valorNumero: number,
    HandleInfoModal: React.Dispatch<SetStateAction<boolean>>,
    HandleInfoModalData: React.Dispatch<SetStateAction<ISoftStoreData | null>>,
    Data: ISoftStoreData | null
}


export default function ItemsSpace({ HandleInfoModal, valor, valorNumero, Data, HandleInfoModalData}:Props) {

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
                    <Items Data={x} HandleInfoModalData={HandleInfoModalData} HandleInfoModal={HandleInfoModal} key={x.nome} setValor={valor} valorNumero={valorNumero}/>
                )
            })}         
        </div>
    )
}