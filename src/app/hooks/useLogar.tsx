import { useRouter } from "next/navigation"
import { UserModel } from "../Models/UserModel"
import { useState } from "react"

interface Props {
    Login: string,
    password: string
}

export default function useLogar({Login, password}:Props) {
    
    const rota = useRouter()
    const Usuario = new UserModel()
    const [errorAlert, setErrorAlert] = useState<boolean>(false)

    const logar = () => {
        if (Login == Usuario.getLogin() && password == Usuario.getPassword()) {
          rota.push("/paginas/LandingPage");
        } else {
          console.log("Usuario ou senha incorreto");
          setErrorAlert(true)
        }
      };
    
      return {logar, errorAlert};
    }