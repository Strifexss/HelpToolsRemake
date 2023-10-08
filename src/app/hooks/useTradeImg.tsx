import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

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
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [Props]);

  useEffect(() => {
    setData(Props[mudar]);
  }, [mudar, Props]);

  return {
    data,
  };
}

export {
  useTradeImg
}