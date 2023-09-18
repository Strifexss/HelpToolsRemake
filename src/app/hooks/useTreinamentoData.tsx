import axios from "axios";
import ITreinamento from "../Models/ITreinamento";
import { urlTreinamento } from "../FakeApi's/ApiTreinamento";

export default async function FetchTreinamentoData():Promise<ITreinamento[]> {
   
    return await axios.get(urlTreinamento).then(response => {
            console.log(response)
            const result: ITreinamento[] = response.data
            return result
        })
    .catch(err => {
        console.error("Erro ao buscar dados da api")
        throw err
    })
} 