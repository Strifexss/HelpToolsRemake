import { useRouter } from 'next/navigation'

function useRota(rota:string) {
    const { push } = useRouter();
    const roteamento = () => push(rota);
    return roteamento
  }

  function Deslogar() {
    return useRota("/")
  }

  function RotaHome() {
    return useRota("/paginas/LandingPage")
  }
  
  function RotaSoftStore() {
    return useRota("/paginas/SoftStore")
  }

  export {
    Deslogar, RotaHome, RotaSoftStore
  }