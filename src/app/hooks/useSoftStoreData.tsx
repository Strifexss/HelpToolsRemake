import axios from "axios";
import { url } from "../FakeApi's/APISoftStore";
import ISoftStoreData from "../Models/SoftStoreData";

export default function FetchDataSoftStore(): Promise<ISoftStoreData[]> {
  
    return axios.get(url)
   
    .then(result => {
      console.log(result);
      const resultado: ISoftStoreData[] = result.data;
      return resultado;
    })
    
    .catch(err => {
      console.error("Erro ao buscar dados da API:", err);
      throw err;
    });
}