import React,{ useMemo } from "react"
import { ChartsContext } from "../../context/chartsContext"
import '../../../../public/styles/board.scss'
import '../../../../public/styles/layouts.scss'
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
import { Line } from "react-chartjs-2"

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

//const {dataVisitas} = useContext(ChartsContext)

const scores = [6, 5, 5, 5, 3, 13, 6, 4, 5, 8,6, 5, 5, 5, 3, 5, 5, 5, 3, 4, 6];
const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2, 4,1 ,2, 4, 4, 5];
const labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

const ChartPreview = (props) => {


    const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Planificaciones",
          data: scores,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
        {
          label: "Realizadas",
          tension: 0.3,
          data: scores2,
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