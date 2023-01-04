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

const ChartPreview2 = ({dataa, title, titleSize, mes, anual, historico}) => {

  //-----------------------------------------------------------------------------------------------------------|VARS
  const currentDate = new Date()
  const datos = dataa
  let producentes
  let contraproducentes
  let neutrales

  //-----------------------------------------------------------------------------------------------------------|EJEC
  if(historico){//si está filtrado por historico

    producentes = datos.filter(res => res.RES_TIPO == 1).length
    contraproducentes = datos.filter(res => res.RES_TIPO == 2).length
    neutrales = datos.filter(res => res.RES_TIPO == 3).length

  }else if(!mes && !anual){//si no hay mes o año (default)

    producentes = datos.filter(res => res.RES_TIPO == 1 && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear()).length
    contraproducentes = datos.filter(res => res.RES_TIPO == 2 && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear()).length
    neutrales = datos.filter(res => res.RES_TIPO == 3 && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear()).length

  }else{//filtrado por mes y año (filter)

    producentes = datos.filter(res => res.RES_TIPO == 1 && new Date(res.REA_FECHA).getMonth() == mes && new Date(res.REA_FECHA).getFullYear() == anual).length
    contraproducentes = datos.filter(res => res.RES_TIPO == 2 && new Date(res.REA_FECHA).getMonth() == mes && new Date(res.REA_FECHA).getFullYear() == anual).length
    neutrales = datos.filter(res => res.RES_TIPO == 3 && new Date(res.REA_FECHA).getMonth() == mes && new Date(res.REA_FECHA).getFullYear() == anual).length

  }

  const options = {
    fill: true,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: `${title}: ${producentes+contraproducentes+neutrales}`,
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
  }, [datos, mes, anual, historico]);

  return <Doughnut data={data} options={options}/>
  
}

export default ChartPreview2