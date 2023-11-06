"use client"
import SearchBar from "../SoftStore/SearchBar"
import ButtonDownload from "./ButtonDownloads"
import DownloadArea from "./DownloadArea"
import Grupos from "./GruposArea"
import { useState, useEffect } from "react"
import ModalsInfos from "./Modals/InfoModals"
import IDownloads from "@/app/Models/IDownloads"
import ModalDownloadPersonalizado from "./Modals/ModalDownloadPersonalizado"
import FetchDataDownloads from "@/app/hooks/useDownloadData"
import AdicioarGrupo from "./Modals/AdicionarGrupo"
import IDonwloadGrupos from "@/app/Models/IDownloadGrupos"
import { ItemsGrupos } from "./ItemsGrupos/ItemsGrupos"
import InfosGrupoModal from "./Modals/InfoGruposModal"

export default function Main() {

    const [showInfoModal, setShowInfoModal] = useState(false)
    const [showAdicionarGrupoModal, setShowAdicionarGrupoModal] = useState(false)
    const [modalDataInfo, setModalDataInfo] = useState<IDownloads | null>(null)
    const [checkedItems, setCheckedItems] = useState<IDownloads[] | null>([])
    const [DownloadPersonalizadoModal, setDownloadPersonalizadoModal] = useState(false)
    const [showInfoGrupoModal, setShowInfoGrupoModal] = useState(false)

    const [PrimaryData, setPrimaryData] = useState<IDownloads[] | null >(null)
    const [SecondaryData, setDataSecondary] = useState<IDownloads[] | null >(null)
    const [ItemsDoGrupo, setItemsGrupos] = useState<IDonwloadGrupos[]>(ItemsGrupos)
    const [modalItemGrupo, setModalItemsGruposInfos] = useState<IDonwloadGrupos>({nome: "Iniciar", Downloads: [{nome: "", link: ""}]})
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiData = await FetchDataDownloads();
            setPrimaryData(apiData);
            setDataSecondary(apiData)
            console.log(apiData);
          } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
          }
        };
    
        fetchData();
      }, []);

      function handleTextChange (event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        const resultado = PrimaryData?.filter(x => x.nome.includes(event.target.value))
        setDataSecondary(resultado ? resultado : null)
      };

    return (
        <div className="w-full h-full flex flex-col items-center gap-10 md:gap-8 overflow-y-scroll scrollbar-hide">
            <section className="w-full flex justify-start items-center">
                <h1 className="text-[white] font-bold text-[1.5rem]">
                    Downloads
                </h1>
            </section>
            <section className="w-full h-full flex flex-col md:flex-row justify-between items-center">
                <SearchBar TextChange={handleTextChange}/>
                <section className="flex flex-row gap-6 items-center pt-4 md:pt-0">
                    <ButtonDownload click={() => setDownloadPersonalizadoModal(true)} Conteudo="Donwload Personalizado"/>
                    <ButtonDownload click={() => setShowAdicionarGrupoModal(!showAdicionarGrupoModal)} Conteudo="Criar Novo Grupo"/>
                </section>
            </section>
            <div className="w-full h-full flex flex-col md:flex-row gap-8">
                <DownloadArea Data={SecondaryData} CheckedItemsArray={checkedItems} CheckedItems={setCheckedItems} ModalDataTransfer={setModalDataInfo} handleInfoModal={setShowInfoModal}/>
                <Grupos setInfosModalItemsGrupos={setModalItemsGruposInfos} OpenItemsGrupos={setShowInfoGrupoModal} Items={ItemsDoGrupo} setItems={setItemsGrupos}/>
            </div>
            {   DownloadPersonalizadoModal &&
                <ModalDownloadPersonalizado ClickCancelar={() => setDownloadPersonalizadoModal(false)} items={checkedItems}/>
            }
            { showInfoModal &&
                <ModalsInfos ModalData={modalDataInfo} handleInfoModal={setShowInfoModal}/> 
            }
            { showAdicionarGrupoModal &&
                <AdicioarGrupo SetGrupo={setItemsGrupos} ItemsCheckados={checkedItems} CloseModal={setShowAdicionarGrupoModal}/>
            }
            {
                showInfoGrupoModal &&
                <InfosGrupoModal Grupos={ItemsDoGrupo} setGrupos={setItemsGrupos} Dados={modalItemGrupo} HandleCloseModal={setShowInfoGrupoModal}/>
            }
        </div>
    )
}