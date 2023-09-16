import axios from "axios";
import { urlConhecimentos } from "../../FakeApi's/ApiConhecimentos"; 
import IConhecimentos from "../../Models/IConhecimentos";

export default function FetchConhecimentosData(): Promise<IConhecimentos[]> {
  
    return axios.get(urlConhecimentos)
   
    .then(result => {
      console.log(result);
      const resultado: IConhecimentos[] = result.data;
      return resultado;
    })
    
    .catch(err => {
      console.error("Erro ao buscar dados da API:", err);
      throw err;
    });
}