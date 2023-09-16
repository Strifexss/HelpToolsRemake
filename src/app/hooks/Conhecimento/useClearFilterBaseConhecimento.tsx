import IConhecimentos from "@/app/Models/IConhecimentos";

interface Props {
    DataPrimary: IConhecimentos[]  | null
    setDataSecondary: React.Dispatch<React.SetStateAction<IConhecimentos[] | null>>;
}

export default function useClearFitlerBaseConhecimento({DataPrimary, setDataSecondary}:Props) {
    setDataSecondary(DataPrimary)
}