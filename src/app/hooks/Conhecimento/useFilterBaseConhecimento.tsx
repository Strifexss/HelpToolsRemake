import IConhecimentos from "../../Models/IConhecimentos";

interface Props {
    SecondaryData: IConhecimentos[] | null;
    setDataSecondary: React.Dispatch<React.SetStateAction<IConhecimentos[] | null>>;
    PrimaryData: IConhecimentos[] | null;
    Grupo: string
}

export default function useFilterBaseDoConhecimento({ SecondaryData, setDataSecondary, PrimaryData, Grupo }: Props) {
    const SecondaryDataFiltered = SecondaryData?.filter(secondaryItem => {
        if (PrimaryData && secondaryItem.Grupo && secondaryItem.Subgrupo) {
            return PrimaryData.some(primaryItem =>
                primaryItem.Grupo === secondaryItem.Grupo && primaryItem.Subgrupo === Grupo
            );
        }
        return false;
    });

    setDataSecondary(SecondaryDataFiltered ? SecondaryDataFiltered : null);
    console.log(SecondaryData)
}