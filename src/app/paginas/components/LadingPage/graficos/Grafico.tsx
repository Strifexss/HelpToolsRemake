import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

interface Props {
    Tipo: "bar" | "doughnut" | "pie"
}

export default function Grafico({Tipo}:Props) {
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
      type: Tipo,
      data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
        datasets: [{
          label: 'Aulas Semanais',
          data: [12, 19, 3, 5, 2, 3, 10],
          borderWidth: 3,
          backgroundColor: ['orange', '#55BCC9'],
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
    <div className='w-full md:w-[40%] 2xl:w-[30%] h-[20rem] 2xl:h-[25rem]'>
      <canvas
        id="grafico"
        ref={chartContainerRef}
      ></canvas>
    </div>
  );
}