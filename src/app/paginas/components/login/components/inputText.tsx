import {Mail, Lock} from "lucide-react"

interface Props {
    Placeholder: string,
    Type: "text" | "password",
    name: string
}

export default function inputText({Placeholder, Type, name}:Props) {
    return(
        <div className="w-full flex flex-col items-start gap-2">
            {/*<label htmlFor={name} 
            className="text-[white] cursor-pointer font-bold text-[0.8rem]">
                {name}
                </label>*/}    
            <div className="flex justify-center items-center">
                { Type === "text" ?
                    <Mail color={"#F3D332"}/> : <Lock color={"#F3D332"}/>  
                }
            </div>
            <input className="w-full md:h-[2.5rem] 2xl:h-[3.5rem] h-[3rem] outline-none px-4  bg-[inherit] border-[#909090] border-[2px] text-[white] focus:border-amareloPadrao" 
            type={Type}
            id={name}
            placeholder={Placeholder} 
            />
        </div>
    )
}