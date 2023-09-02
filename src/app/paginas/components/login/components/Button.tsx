interface Props {
    content: string,
    Click: () => void
}

export default function Button({content, Click}:Props) {
    return(
        <div className="w-full">
            <button onClick={() => Click()} 
                className="w-full h-[3rem] md:h-[2.5rem] 2xl:h-[3rem] rounded-md bg-amareloPadrao hover:bg-[#b8a54a] transition-[0.1s]">
                <h1 className="text-[white] font-bold text-[1.5rem]">
                    {content}
                </h1>
            </button>
        </div>
    )
}