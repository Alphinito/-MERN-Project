import React,{ useMemo, useContext } from "react"
import { ChartsContext } from "../../context/chartsContext"
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

const ChartClientes = ({dataMain, title, titleSize, cliente}) => {

  //-----------------------------------------------------------------------------------------------------------|VARS
    const {dataResultadosVisitas, dataVisitasSeguimientos } = useContext(ChartsContext)
    let datos = dataMain
    let labelss = []
    let donutGraphData = []
  //-----------------------------------------------------------------------------------------------------------|EJEC
  const checkMatch = (v1, v2) => {
    return v1.filter((item1) => {
      return v2.filter((item2) => {
        return item1.VIS_ID === item2.VIS_ID;
      });
    });
  };

  const bridge = () => {
    for(let i in dataResultadosVisitas){
        labelss[i] = dataResultadosVisitas[i]['RES_RESULTADO']

        if (checkMatch(dataResultadosVisitas,datos)) {
            donutGraphData[i] = dataVisitasSeguimientos.filter(res => res.CLI_NIT == cliente && res.RES_RESULTADO == labelss[i]).length
        }else{
            donutGraphData[i] = 0
        }
        labelss[i] = `${labelss[i]}: ${donutGraphData[i]}`
    }
  }

    bridge()

  const options = {
    fill: true,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
            font: {
                family: "'Karla', sans-serif",
                size: 14,
                weight: 300,
                overflow: true
            }
        }
      },
      title: {
        display: true,
        text: `${title}`,
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
            labels: labelss,
            datasets: [{
            label: 'Cantidad',
            data: donutGraphData,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
            }]
        };
    },[datos,cliente]);

  return <div style={{gridColumn: '1/6', width:'65%'}}><Doughnut data={data} options={options}/></div>
  
}

export default ChartClientes
