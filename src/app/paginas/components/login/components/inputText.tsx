import { Mail, Lock } from "lucide-react";
import React, { Ref } from "react";

interface Props {
  Placeholder: string;
  Type: "text" | "password";
  name: string;
  value?: string; // Adicione a propriedade value
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Adicione a propriedade onChange
}

export default function InputText({ Placeholder, Type, name, value, onChange }: Props) {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <div className="flex justify-center items-center">
        {Type === "text" ? (
          <Mail
            color={"#F3D332"}
            className="md:w-[1rem] md:h-[1rem] 2xl:w-[2rem] 2xl:h-[2rem]"
          />
        ) : (
          <Lock
            color={"#F3D332"}
            className="md:w-[1rem] md:h-[1rem] 2xl:w-[2rem] 2xl:h-[2rem]"
          />
        )}
      </div>
      <input
        className="w-full md:h-[2.5rem] 2xl:h-[3.5rem] h-[3rem] outline-none px-4 rounded-md  bg-[inherit] border-[#909090] border-[2px] text-[white] focus:border-amareloPadrao"
        type={Type}
        id={name}
        placeholder={Placeholder}
        value={value} // Passe o valor como prop
        onChange={onChange} // Passe a função de mudança como prop
      />
    </div>
  );
}