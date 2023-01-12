import React,{ useMemo, useEffect } from "react"
import '../../../../public/styles/board.scss'
import '../../../../public/styles/layouts.scss'
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartPreview = ({dataa, title, titleSize, mes, anual}) => {

  const datos = dataa
  const planeadas = []
  for (let i = 1; i < 32 ; i++) {
    const currentDate = new Date()
    !mes && !anual
    ?
      planeadas[i] = datos.filter(res => new Date(res.REA_FECHA).getDate() == i && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear() && res.REA_DIRECTA == 0).length
    :
      planeadas[i] = datos.filter(res => new Date(res.REA_FECHA).getDate() == i && new Date(res.REA_FECHA).getMonth() == mes && new Date(res.REA_FECHA).getFullYear() == anual && res.REA_DIRECTA == 0).length
  }

  const noPlaneadas = []
  for (let i = 1; i < 32 ; i++) {
    const currentDate = new Date()
    !mes && !anual
    ?
      noPlaneadas[i] = datos.filter(res => new Date(res.REA_FECHA).getDate() == i && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear() && res.REA_DIRECTA == 1).length
    :
      noPlaneadas[i] = datos.filter(res => new Date(res.REA_FECHA).getDate() == i && new Date(res.REA_FECHA).getMonth() == mes && new Date(res.REA_FECHA).getFullYear() == anual && res.REA_DIRECTA == 1).length
  }

  const totales = []
  for (let i = 1; i < 32 ; i++) {
    totales[i] = noPlaneadas[i] + planeadas[i]
  }
  const labels = ['00','01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']

  const options = {
    fill: true,
    responsive: true,
    scales: {
      y: {
        min: 0,
      },
      x: {
        min: 1
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          // This more specific font property overrides the global property
          font: {
              family: "'Karla', sans-serif",
              size: 14,
              weight: 300
          }
      }
      },
      title: {
        display: true,
        text: title,
        color: '#0080c4',
        font:{
          family: "'Karla', sans-serif",
          size: titleSize,
          weight: 300,
        }
      },
    },
  };

  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Planificadas",
          data: planeadas,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
        {
          label: "No planificadas",
          tension: 0.3,
          data: noPlaneadas,
          borderColor: "green",
          backgroundColor: "rgba(0, 255, 0, 0.3)",
          pointBackgroundColor: "green",
          pointRadius: 6,
        },
        {
          label: "Total",
          data: totales,
          borderColor: "rgba(155, 155, 155, 0.3)",
          backgroundColor: "rgba(155, 155, 155, 0.3)",
          pointBackgroundColor: "rgba(155, 155, 155, 0.3)",
          pointRadius: 6,
        },
      ],
      labels,
    };
  }, [datos,mes,anual]);

  return <Line data={data} options={options} />;

}

export default ChartPreview