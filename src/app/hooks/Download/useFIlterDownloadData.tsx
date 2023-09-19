import IDownloads from "@/app/Models/IDownloads";

interface Props {
    SecondaryData: IDownloads[] | null;
    setDataSecondary: React.Dispatch<React.SetStateAction<IDownloads[] | null>>;
    PrimaryData: IDownloads[] | null;
    Nome: string
}

export default function useFilterDownload({ SecondaryData, setDataSecondary, PrimaryData, Nome }: Props) {
    const SecondaryDataFiltered = SecondaryData?.filter(secondaryItem => {
        if (PrimaryData && secondaryItem.nome) {
            return PrimaryData.some(primaryItem =>
                primaryItem.nome === secondaryItem.nome && primaryItem.nome === Nome
            );
        }
        return false;
    });

    setDataSecondary(SecondaryDataFiltered ? SecondaryDataFiltered : null);
    console.log(SecondaryData)
}