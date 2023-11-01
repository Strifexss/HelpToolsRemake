"use client"
import React, { useEffect, useState, useRef } from 'react';
import { UserModel } from '@/app/Models/UserModel';
import Wrapper from './Wrapper';
import { ConteudoWrapper, LiberacoesConteudo } from './itemsWrapper/itemsWrapper';
import Grafico from './graficos/Grafico';
import CarouselImg from './carouselImg/carouselImg';

export default function Main() {
  const Usuario = new UserModel();
 
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
      <section className="w-full flex flex-row justify-center gap-8 md:gap-16 2xl:gap-12 2xl:gap-y-4 flex-wrap">
        <CarouselImg/>
        <Grafico Tipo='bar'/>
        <Grafico Tipo='doughnut'/>
        <Wrapper hasIcon Conteudo={ConteudoWrapper} headerTexto="Ultimos Vídeos" />
        <Wrapper hasDate  Conteudo={LiberacoesConteudo} headerTexto="Liberações" />
        <Wrapper headerTexto="Comunicados Fiscais" />
      </section>
    </div>
  );
}