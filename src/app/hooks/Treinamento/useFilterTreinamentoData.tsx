import ITreinamento from "@/app/Models/ITreinamento";

interface Props {
    SecondaryData: ITreinamento[] | null;
    setDataSecondary: React.Dispatch<React.SetStateAction<ITreinamento[] | null>>;
    PrimaryData: ITreinamento[] | null;
    Nome: string
}

export default function useFilterBaseDoConhecimento({ SecondaryData, setDataSecondary, PrimaryData, Nome }: Props) {
    const SecondaryDataFiltered = SecondaryData?.filter(secondaryItem => {
        if (PrimaryData && secondaryItem.Nome) {
            return PrimaryData.some(primaryItem =>
                primaryItem.Nome === secondaryItem.Nome && primaryItem.Nome === Nome
            );
        }
        return false;
    });

    setDataSecondary(SecondaryDataFiltered ? SecondaryDataFiltered : null);
    console.log(SecondaryData)
}