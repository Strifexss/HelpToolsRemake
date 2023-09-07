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
    const [Loading, setLoading] = useState(false)

    const logar = () => {
        if (Login == Usuario.getLogin() && password == Usuario.getPassword()) {
          setLoading(true)
          setTimeout(function() {
            rota.push("/paginas/LandingPage");
          }, 3000);
          
        } else {
          console.log("Usuario ou senha incorreto");
          
          setErrorAlert(true)
          setLoading(true)

          setTimeout(function() {
            setErrorAlert(false)
            setLoading(false)
          }, 3000);

        }
      };
    
      return {logar, errorAlert, Loading};
    }