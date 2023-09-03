import { useRouter } from 'next/navigation'

function useRota(rota:string) {
    const { push } = useRouter();
    const roteamento = () => push(rota);
    return roteamento
  }

  function Deslogar() {
    return useRota("/")
  }

  export {
    Deslogar
  }