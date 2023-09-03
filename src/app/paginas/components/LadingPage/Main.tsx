"use client"
import React, { useEffect, useState, useRef } from 'react';
import { UserModel } from '@/app/Models/UserModel';
import Wrapper from './Wrapper';
import { ConteudoWrapper } from './itemsWrapper/itemsWrapper';
import Chart from 'chart.js/auto';

export default function Main() {
  const Usuario = new UserModel();
  const [chartInstance, setChartInstance] = useState<Chart<"bar", number[], string> | null>(null);
  const chartContainerRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = chartContainerRef.current;

    if (!ctx) {
      return;
    }

    if (chartInstance) {
      // Se já existe um gráfico, destrua-o antes de criar um novo.
      chartInstance.destroy();
    }

    // Defina o tamanho do canvas com base nas porcentagens desejadas
    ctx.width = ctx.clientWidth * 0.4; // 40% da largura
    ctx.height = 450; // 30rem de altura

    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
        datasets: [{
          label: 'Aulas Semanais',
          data: [12, 19, 3, 5, 2, 3, 10],
          borderWidth: 3,
          backgroundColor: ['#8257E5', '#55BCC9'],
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
          },
        },
        layout: {
          padding: 0,
        },
        responsive: true,
        maintainAspectRatio: false, // Defina como false para controlar o tamanho manualmente
        aspectRatio: 0.4, // Largura (40%) dividido pela altura (30rem)
      },
    });

    setChartInstance(newChart);

    // Lembre-se de destruir o gráfico quando o componente for desmontado.
    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
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
      <section className='w-[30%]'>
      <canvas
        id="grafico"
        ref={chartContainerRef}
        style={{ width: '40%', height: '30rem' }}
      ></canvas>
      </section>
      <section className="w-full flex flex-row justify-center gap-8 md:gap-16 2xl:gap-16 flex-wrap">
        <Wrapper Conteudo={ConteudoWrapper} headerTexto="Ultimos Vídeos" />
        <Wrapper headerTexto="Liberações" />
        <Wrapper headerTexto="Comunicados Fiscais" />
      </section>
    </div>
  );
}