import React,{ useMemo, useContext } from "react"
import { ChartsContext } from "../../context/chartsContext"
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

const ChartPreview = (props) => {

  const {dataVisitasRealizadas} = useContext(ChartsContext)

  const planeadas = []
  for (let i = 1; i < 32 ; i++) {
    const currentDate = new Date()
    planeadas[i] = dataVisitasRealizadas.filter(res => new Date(res.REA_FECHA).getDate() == i && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && res.REA_DIRECTA == 0).length
  }

  const noPlaneadas = []
  for (let i = 1; i < 32 ; i++) {
    const currentDate = new Date()
    noPlaneadas[i] = dataVisitasRealizadas.filter(res => new Date(res.REA_FECHA).getDate() == i && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && res.REA_DIRECTA == 1).length
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
      ],
      labels,
    };
  }, []);

  return <Line data={data} options={options} />;

}

export default ChartPreview