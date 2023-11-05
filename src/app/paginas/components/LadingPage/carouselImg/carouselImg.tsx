import Image, { StaticImageData } from "next/image";
import {useTradeImg} from "@/app/hooks/useTradeImg";
import { ImagensCarousel } from "../itemsWrapper/itemsWrapper";
import Link from "next/link";
interface Elementos {
  Image: StaticImageData;
  textoPrincipal: string;
  textoSecundario: string;
}

export default function CarouselImg() {
  const { data } = useTradeImg(ImagensCarousel);

  return (
    <div className="w-full min-w-[28rem] md:min-w-[28.5%] md:w-[28.5%] md:h-[15rem] 2xl:w-[30%] h-[20rem] 2xl:h-[20rem] flex-col items-center bg-padraoCinzaC cursor-pointer">
      <Link href={data.Links}
      target="_blank"
      >
        <Image
          className="w-full h-[75%]"
          src={data.Image}
          alt="Imagem"
          width={1000}
          height={1000}
        />
        <div className="w-full h-[25%] flex flex-col items-center justify-center text-[0.8rem] md:text-[0.6rem] 2xl:text-[0.8rem]">
          <h1 className="text-[white] font-semibold text-center">{data.textoPrincipal}</h1>
          <h1 className="text-[gray] font-semibold text-center">{data.textoSecundario}</h1>
        </div>
      </Link>
    </div>
  );
}





