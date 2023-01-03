import React,{ useMemo } from "react"
import '../../../../public/styles/board.scss'
import '../../../../public/styles/layouts.scss'
import { Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartPreview2 = ({dataa, title, titleSize, mes, anual}) => {

  const datos = dataa
  const producentes = datos.filter(res => res.RES_TIPO == 1).length
  const contraproducentes = datos.filter(res => res.RES_TIPO == 2).length
  const neutrales = datos.filter(res => res.RES_TIPO == 3).length

  const options = {
    fill: true,
    responsive: true,
    plugins: {
      legend: {
        display: true,
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
      labels: [
        'Positivo',
        'Negativo',
        'Neutro u otro'
      ],
      datasets: [{
        label: 'Cantidad',
        data: [producentes, contraproducentes, neutrales],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
  }, []);

  return <Doughnut data={data} options={options}/>
  

}

export default ChartPreview2