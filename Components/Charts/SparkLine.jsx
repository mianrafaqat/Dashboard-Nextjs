
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS , LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { useRef } from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

export default function SparkLine({
  // id,
  height,
  width,
  // color,
  sparkData,
  // type,
  currentColor,
}) {
  const lineRef = useRef()
  const data = {
    labels: ["", "", "","", "", "",],
    datasets: [{
      data: sparkData,
      borderColor: currentColor,
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointBorderWidth: 10,
      tension: 0,
    }]
  }

  const options = {
    Plugin: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false
        },
        min: 1,
        max: 10,
        ticks:{
          stepSize: 0,
        }
      }
    }
  }

  // console.log(lineRef)

 
  return (
    <>
    <div style={{width: width, height: height}}>
           <Line ref={lineRef} data={data} options={options}></Line>
    </div> 
    </>
  );
}
