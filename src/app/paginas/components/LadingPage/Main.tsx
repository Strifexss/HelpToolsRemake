"use client"
import React, { useEffect, useState, useRef } from 'react';
import { UserModel } from '@/app/Models/UserModel';
import Wrapper from './Wrapper';
import { ConteudoWrapper } from './itemsWrapper/itemsWrapper';
import Chart from 'chart.js/auto';
import Grafico from './graficos/Grafico';

export default function Main() {
  const Usuario = new UserModel();
 

  useEffect(() => {
   
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll scrollbar-hide gap-16">
      <section className="w-full flex flex-col md:flex-row justify-start items-center gap-4">
        <h1 className="text-[white] text-[1.5rem] md:text-[1.5rem] 2xl:text-[2rem] font-bold">
          Seja bem vindo {Usuario.getName()}!
        </h1>
        <h1 className="text-[gray] text-center">
          Sua jornada rumo ao próximo nível está apenas começando!
        </h1>
      </section>
      <section className="w-full flex flex-row justify-start gap-8 md:gap-16 2xl:gap-16 flex-wrap">
        <Grafico Tipo='bar'/>
        <Grafico Tipo='doughnut'/>
        <Grafico Tipo='pie'/>
      </section>
      <section className="w-full flex flex-row justify-center gap-8 md:gap-16 2xl:gap-16 flex-wrap">
        <Wrapper Conteudo={ConteudoWrapper} headerTexto="Ultimos Vídeos" />
        <Wrapper headerTexto="Liberações" />
        <Wrapper headerTexto="Comunicados Fiscais" />
      </section>
    </div>
  );
}