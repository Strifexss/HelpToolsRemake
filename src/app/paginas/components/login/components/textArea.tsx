"use client"
import Button from "./Button";
import InputText from "./inputText";
import useLogar from "@/app/hooks/useLogar";
import { useRef, useState } from "react";

export default function TextArea() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {logar, errorAlert, Loading} = useLogar({ Login: email, password: password });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(event.target.value)
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault()
    logar()
  };
  const handleClickNoForm = () => {
    logar()
  };

  return (
    <form onSubmit={handleClick} className="w-full flex flex-col justify-start gap-8 md:gap-6 2xl:gap-8">
      <h1 className={`text-[red] font-semibold text-[0.8rem] ${errorAlert == true ? "block" : "hidden"}`} >
        Usuario ou senha incorretos
      </h1>
      <InputText
        Placeholder="Insira o seu Usuário:"
        Type="text"
        name="Email:"
        value={email}
        onChange={handleEmailChange}
      />
      <InputText
        Placeholder="Insira a sua Senha:"
        Type="password"
        name="Password:"
        value={password}
        onChange={handlePasswordChange}
      />
      <a className="text-[#909090] hover:text-[white] cursor-pointer text-[0.8rem]">
        Esqueceu a Senha?
      </a>
        <Button loading={Loading} content="Login" Click={() => handleClickNoForm()}/>      
    </form>
  );
}