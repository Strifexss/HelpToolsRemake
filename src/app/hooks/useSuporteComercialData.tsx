import axios from "axios";
import { url } from "../FakeApi's/ApiSuporteComercial";
import ISuporteComercial from "../Models/ISuporteComercial";

export default function useSuporteComercialData():Promise<ISuporteComercial[]> {
    return axios.get(url)

    .then(result => {
        console.log(result)
        const resultado: ISuporteComercial[] = result.data
        return resultado
    })
    .catch(err => {
        console.log(err)
        throw err
    })
}