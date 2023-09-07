import axios from "axios";
import { url } from "../FakeApi's/ApiDownloads";
import DownloadsData from "../Models/IDownloads";

export default function FetchDataDownloads(): Promise<DownloadsData[]> {
  
    return axios.get(url)
   
    .then(result => {
      console.log(result);
      const resultado: DownloadsData[] = result.data;
      return resultado;
    })
    
    .catch(err => {
      console.error("Erro ao buscar dados da API:", err);
      throw err;
    });
}