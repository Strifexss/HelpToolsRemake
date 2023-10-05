import axios from "axios";
import { url } from "../FakeApi's/APISoftStore";
import ISoftStoreData from "../Models/SoftStoreData";
import Valor from "../Models/IBUYsoftstoreData";

export default function FetchDataSoftStore(): Promise<Valor[]> {
  
    return axios.get(url)
   
    .then(result => {
      console.log(result);
      const resultado: Valor[] = result.data;
      return resultado;
    })
    
    .catch(err => {
      console.error("Erro ao buscar dados da API:", err);
      throw err;
    });
}