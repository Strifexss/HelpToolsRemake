import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ImagensCarousel } from "../itemsWrapper/itemsWrapper";
import {ChevronLeftSquareIcon, ChevronRightSquareIcon } from "lucide-react";

interface Elementos {
  Image: StaticImageData;
  textoPrincipal: string;
  textoSecundario: string;
  Links: string
}

function useTradeImg(Props: Elementos[]) {
  const [data, setData] = useState<Elementos>(Props[0]);
  const [mudar, setMudar] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMudar((prevMudar) => (prevMudar + 1) % Props.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [Props]);

  useEffect(() => {
    setData(Props[mudar]);
  }, [mudar, Props]);

  return {
    data,
    setMudar,
  };
}

export default function CarouselImg() {

  const { data, setMudar } = useTradeImg(ImagensCarousel);

  const handlePrev = () => {
    setMudar(prevMudar => (prevMudar === 0 ? ImagensCarousel.length - 1 : prevMudar - 1));
  };

  const handleNext = () => {
    setMudar(prevMudar => (prevMudar + 1) % ImagensCarousel.length);
  };

  return (
    <div className="w-full mb-20 md:w-[40%] 2xl:w-[30%] h-[20rem] 2xl:h-[20rem] flex-col items-center bg-padraoCinzaC cursor-pointer relative">
  <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
  <button
    className="bg-white text-black p-2 rounded-full mr-2"
    style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
    onClick={handlePrev}
  >
    <ChevronLeftSquareIcon color="black" fill="white" width={40} height={40} />
  </button>
</div>
      <div className="relative">
        <Link href={data.Links} target="_blank">
          <Image
            className="w-full h-[75%]"
            src={data.Image}
            alt="Imagem"
            width={1000}
            height={1000}
          />
          <div className="w-full h-[25%] flex flex-col items-center justify-center text-[0.8rem] absolute pt-5">
            <h1 className="text-[white] font-semibold text-center">{data.textoPrincipal}</h1>
            <h1 className="text-[gray] font-semibold text-center">{data.textoSecundario}</h1>
          </div>
        </Link>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <button className="bg-white text-black p-2 rounded-full ml-2" onClick={handleNext}><ChevronRightSquareIcon color="black" fill="white" width={40} height={40}/></button>
      </div>
    </div>
  );
}