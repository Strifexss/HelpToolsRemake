import IDownloads from "@/app/Models/IDownloads"

interface Props {
    handleInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
    ModalData: IDownloads | null
}

export default function ModalsInfos({handleInfoModal, ModalData}:Props) {
    return(
        <div className="bg-padraoCinzaE w-[30rem] h-[30rem] absolute">
            <h1 onClick={() => handleInfoModal(false)}
                className="text-[white]">
                Fechar
            </h1>
            <h1 onClick={() => handleInfoModal(false)}
                className="text-[white]">
              {ModalData?.nome}
            </h1>
        </div>
    )
}