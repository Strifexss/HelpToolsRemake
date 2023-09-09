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
 
  function RotaDownloads() {
    return useRota("/paginas/Downloads")
  }
 
  function RotaConhecimentos() {
    return useRota("/paginas/Conhecimentos")
  }

  function RotaConhecimentosConteudo(id:string) {
    return useRota(`/paginas/Conhecimentos/Conteudo/${id}`)
  }

  export {
    Deslogar, RotaHome, RotaSoftStore, RotaDownloads, RotaConhecimentos, RotaConhecimentosConteudo
  }