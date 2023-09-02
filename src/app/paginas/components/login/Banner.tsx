import Image from "next/image";
import BannerSoftcom from "@/app/imgs/BannerSoftcom.png"

export default function Banner() {
    
    return(
    <div className="w-[90%] h-full">
        <Image className="w-full h-full"
            src={BannerSoftcom}
            width={1000}
            height={1000}
            alt="Softcom"
        />
    </div>
    )
}