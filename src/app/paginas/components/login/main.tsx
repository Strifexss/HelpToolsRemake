import Banner from "./Banner"
import Formulario from "./Formulario"
export default function Main() {
    return(
        <div className="w-full h-full bg-preto flex items-center justify-center ">
            <section className="w-full h-full flex items-center justify-center">
                <Banner/>
                <Formulario/>
            </section>
        </div>
    )
}