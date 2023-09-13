import { urlBaseConhecimentos } from "../FakeApi's/ApiBaseConhecimento";
import IBaseConhecimento from "../Models/IBaseConhecimento";
import axios from "axios";

export default function useBaseConhecimentoData():Promise<IBaseConhecimento[]> {
    
    return axios.get(urlBaseConhecimentos)
    
    .then(result => {
        console.log(result)
        const resultado:IBaseConhecimento[] = result.data
        return resultado
    })
    .catch(err => {
        console.log(err)
        throw err
    })
}