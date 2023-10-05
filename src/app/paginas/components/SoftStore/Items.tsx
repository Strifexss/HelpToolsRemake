"use client"

import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SetStateAction, useState } from "react"
import { CamisaAmerela } from "@/app/imgs/SoftStoreImgs"
import Valor from "@/app/Models/IBUYsoftstoreData"
import ICarrinho from "@/app/Models/ICarrinho"
import ISoftStoreData from "@/app/Models/SoftStoreData"

interface Props {
    setValor: React.Dispatch<React.SetStateAction<ICarrinho | null>>;
    HandleInfoModal: React.Dispatch<SetStateAction<boolean>>,
    HandleInfoModalData: React.Dispatch<SetStateAction<Valor | null>>,
    Data: Valor | null
}

export default function Items(Props:Props) {

    const [quantidade, setQuantidade] = useState<number>(0)


    function aumentarQuantidade() {
        setQuantidade(quantidade + 1);

        const newItem: ISoftStoreData = {
            nome: Props.Data?.nome ? Props.Data.nome : "",
            type: Props.Data?.type ? Props.Data.type : "",
            image: Props.Data?.image ? Props.Data.image : "",
            preco: Props.Data?.preco ? Props.Data.preco : 0
        }

        Props.setValor(prevState => {
            const updatedItems = (prevState?.Items || []).map(item => {
                if (item.nome === newItem.nome) {
                    return { ...item, quantidade: (item.quantidade || 1) + 1 };
                }
                return item;
            });

            if (!updatedItems.find(item => item.nome === newItem.nome)) {
                updatedItems.push({ ...newItem, quantidade: 1 });
            }

            return {
                ...prevState,
                ValorTotal: (prevState?.ValorTotal || 0) + newItem.preco,
                Items: updatedItems
            };
        });
    }

    function diminuirQuantidade() {
        if (quantidade > 0) {
            setQuantidade(quantidade - 1);
    
            const newItem: ISoftStoreData = {
                nome: Props.Data?.nome ? Props.Data.nome : "",
                type: Props.Data?.type ? Props.Data.type : "",
                image: Props.Data?.image ? Props.Data.image : "",
                preco: Props.Data?.preco ? Props.Data.preco : 0
            }
    
            Props.setValor(prevState => {
                const updatedItems = (prevState?.Items || []).map(item => {
                    if (item.nome === newItem.nome) {
                        const newQuantidade = (item.quantidade || 0) - 1;
                        if (newQuantidade <= 0) {
                            // Retorna null para indicar a remoção do item
                            return null;
                        }
                        return { ...item, quantidade: newQuantidade };
                    }
                    return item;
                }).filter(Boolean) as ISoftStoreData[]; // Filtra e converte para o tipo correto
    
                return {
                    ...prevState,
                    ValorTotal: (prevState?.ValorTotal || 0) - newItem.preco,
                    Items: updatedItems
                };
            });
        }
    }
    function HandleData() {
        Props.HandleInfoModalData(Props.Data)
        Props.HandleInfoModal(true)
       console.log(Props.Data)
    }

    return(
        <div className=" w-[100%] h-[30rem] md:h-auto md:w-[15rem] 2xl:h-[25rem]  bg-padraoCinzaC hover:bg-padraoCinzaE flex flex-col cursor-pointer">
            <section onClick={() => HandleData()}
            className="w-full h-[70%] p-4 flex justify-center items-center">
            <Image className="w-full h-full"
                src={Props.Data?.image ? Props.Data?.image : CamisaAmerela}
                alt="Imagem"
                width={1000}
                height={1000}
            />
            </section>
            <section className="w-full h-auto flex flex-col p-4 gap-2 justify-center">
                <h1 className="text-[white] font-semibold">{Props.Data?.nome}</h1>
                <h1 className="text-[gray] text-[0.8rem] font-semibold">{Props.Data?.type}</h1>
                <section className="w-full flex flex-row justify-between items-center">
                    <h1 className="text-[Orange] text-[1.5rem] font-semibold">${Props.Data?.preco}</h1>
                    <section className="flex flex-row gap-2">
                        <ArrowLeft color="white" onClick={() => diminuirQuantidade()}/>
                        <h1 className="text-[white] w-[2rem] text-center bg-padraoCinzaSC">{quantidade}</h1>
                        <ArrowRight color="white" onClick={() => aumentarQuantidade() }/>
                    </section>
                </section>
            </section>
        </div>
    )
}