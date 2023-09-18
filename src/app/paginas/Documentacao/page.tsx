"use client"
import { RotaHome } from "@/app/hooks/useRotas"

export default function Documentacao() {

    const RotaInicio = RotaHome()

    return(
        <div className="w-full h-full flex flex-col justify-center items-center ">
            <h1 className="text-[white] text-[2rem] font-bold">
                Acesso Restrito
            </h1>
            <h1 className="text-[gray] font-bold text-center">
                O perfil autenticado não tem acesso ao recurso solicitado.
            </h1>
            <button onClick={() => RotaInicio()} 
                className="bg-dourado p-4 w-[10rem] rounded-md text-[white] font-bold m-4">
                Voltar
            </button>
        </div>
    )
}