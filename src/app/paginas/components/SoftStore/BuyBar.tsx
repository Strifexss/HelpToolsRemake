"use client"
import { useState } from "react"

interface Props {
    valor: number
}

export default function BuyBar({valor}:Props) {

    return(
        <div className="bottom-0 w-[50%]  bg-padraoCinzaSC h-[5rem] flex justify-center items-center">
            <h1 className="text-[white] text-[2rem] font-bold">${valor}</h1>
        </div>
    )
}