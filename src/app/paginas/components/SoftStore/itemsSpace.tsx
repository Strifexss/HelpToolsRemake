import Items from "./Items"
import FetchDataSoftStore from "@/app/hooks/useSoftStoreData";
import Valor from "@/app/Models/IBUYsoftstoreData";
import ICarrinho from "@/app/Models/ICarrinho";
import ISoftStoreData from "@/app/Models/SoftStoreData";
import { useEffect, useState, useCallback, SetStateAction } from "react";


interface Props {
    valor: React.Dispatch<React.SetStateAction<ICarrinho | null>>;
    HandleInfoModal: React.Dispatch<SetStateAction<boolean>>,
    HandleInfoModalData: React.Dispatch<SetStateAction<Valor | null>>,
    Data: Valor | null
}


export default function ItemsSpace({ HandleInfoModal, valor, Data, HandleInfoModalData}:Props) {

    const [dados, setDados] = useState<Valor[]| null>(null)

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
                    <Items Data={x} HandleInfoModalData={HandleInfoModalData} HandleInfoModal={HandleInfoModal} key={x.nome} setValor={valor}/>
                )
            })}         
        </div>
    )
}