import React, { useEffect, useState, useRef, useCallback } from 'react';
import Chart from 'chart.js/auto';

interface Props {
  Tipo: "bar" | "doughnut" | "pie";
  positionLabel: "top" | "bottom" | "right" | "left"
}

export default function Grafico({ Tipo, positionLabel }: Props) {
  const [chartInstance, setChartInstance] = useState<Chart<"bar" | "doughnut" | "pie", number[], string> | null>(null);
  const chartContainerRef = useRef<HTMLCanvasElement | null>(null);

  // Função createChart definida fora do componente
  const createChart = useCallback((ctx: CanvasRenderingContext2D) => {
    if (!ctx) {
      return;
    }

    if (chartInstance) {
      // Atualize o gráfico existente em vez de criar um novo
      chartInstance.data.datasets[0].data = [12, 19, 3, 5, 2, 3];
      chartInstance.update(); // Atualize o gráfico
      return;
    }

    // Defina o tamanho do canvas com base nas porcentagens desejadas
    ctx.canvas.width = ctx.canvas.clientWidth * 0.4; // 40% da largura
    ctx.canvas.height = 450; // 30rem de altura

    

    const newChart = new Chart(ctx, {
      type: Tipo,
      data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
        datasets: [{
          label: 'Ocorrências',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2,
          backgroundColor: ['orange', '#55BCC9'],
        }],
      },
      options: {
        plugins: {
          legend: {
              position: positionLabel,
              align: 'center',
                labels: {
                    font: {
                        size: 11 // Defina o tamanho da fonte das legendas
                    },
                }
          },
          
      },
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
  }, [Tipo, chartInstance, positionLabel]);

  useEffect(() => {
    const ctx = chartContainerRef.current?.getContext('2d');
    if (ctx) {
      createChart(ctx);
    }
  }, [createChart]);

  return (
    <div className='w-full md:w-[30%] 2xl:w-[30%] h-[20rem] 2xl:h-[20rem]'>
      <canvas
        id="grafico"
        ref={chartContainerRef}
      ></canvas>
    </div>
  );
}