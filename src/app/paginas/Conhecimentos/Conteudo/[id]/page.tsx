"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import IConhecimentos from "@/app/Models/IConhecimentos"
import FetchConhecimentosData from "@/app/hooks/useConhecimentosData"
import Main from "@/app/paginas/components/Conhecimentos/Conteudo/Main"
export default function Conteudo() {

   

    
    return(
      <div className="w-full h-full bg-padraoCinzaE p-4 md:px-52 2xl:px-96 2xl:py-6 ">
      <Main/>
      </div>
    )
}