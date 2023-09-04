import Image, { StaticImageData } from "next/image";
import { Banner } from "@/app/imgs/imgExport";
import useTradeImg from "@/app/hooks/useTradeImg";
import { ImagensCarousel } from "../itemsWrapper/itemsWrapper";

interface Elementos {
  Image: StaticImageData;
  textoPrincipal: string;
  textoSecundario: string;
}

export default function CarouselImg() {
  const { data } = useTradeImg(ImagensCarousel);

  return (
    <div className="w-full mb-20 md:w-[40%] 2xl:w-[30%] h-[20rem] 2xl:h-[25rem] flex-col items-center bg-padraoCinzaC cursor-pointer">
      <Image
        className="w-full h-[75%]"
        src={data.Image}
        alt="Imagem"
        width={1000}
        height={1000}
      />
      <div className="w-full h-[25%] flex flex-col items-center justify-center">
        <h1 className="text-[white] font-semibold text-center">{data.textoPrincipal}</h1>
        <h1 className="text-[gray] font-semibold text-center">{data.textoSecundario}</h1>
      </div>
    </div>
  );
}





