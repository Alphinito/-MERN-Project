import React,{ useMemo } from "react"
import '../../../../public/styles/board.scss'
import '../../../../public/styles/layouts.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
  fill: true,
  responsive: true,
};

const ChartPreview2 = (props) => {


    const data = useMemo(function () {
    return {
      labels: [
        'Positivo',
        'Negativo',
        'Neutro u otro'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
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