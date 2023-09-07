import GruposItems from "./GruposItems"

export default function Grupos() {
    return(
        <section className="w-full md:w-[35%] h-[50%] flex flex-col">
            <section className="w-full h-full bg-padraoCinzaSC flex flex-col scrollbar-hide rounded-md">
                <div className="bg-dourado font-semibold flex justify-center items-center w-full h-[5rem]">
                    <h1 className="md:text-[1.5rem] font-semibold text-[white] text-center">
                        <h1>Grupos</h1>
                    </h1>
                </div>
                <section className="w-full h-full flex flex-col">
                    <GruposItems/>  
                    <GruposItems/>  
                    <GruposItems/>  
                    <GruposItems/>  
                    <GruposItems/>  
                </section>
            </section>
        </section>
    )
}