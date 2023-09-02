interface Props {
    Placeholder: string,
    Type: "text" | "password",
    name: string
}

export default function inputText({Placeholder, Type, name}:Props) {
    return(
        <div className="w-full flex flex-col items-start gap-2">
            <label htmlFor={name} 
            className="text-[white] cursor-pointer font-bold">
                {name}
            </label>
            <input className="w-full rounded-md outline-none px-4 h-[3rem] bg-[inherit] border-[#909090] border-[2px] text-[white] focus:border-amareloPadrao" 
            type={Type}
            id={name}
            placeholder={Placeholder} 
            />
        </div>
    )
}