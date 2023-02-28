import React, { useRef } from "react";
import { useSateContext } from "@/contexts/ContextProvider";
import ReactDOM from "react-dom";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "15-Jan",
    "15-Feb",
    "15-Mar",
    "15-Apr",
    "15-May",
    "15-Jun",
    "15-Jul",
    "15-Aug",
    "15-Sep",
    "15-Oct",
    "15-Nov",
    "15-Dec",
  ],
  datasets: [
    {
      fill: false,
      label: 'My First Dataset',
      lineTension: 0,
      backgroundColor: "rgba(131,138,133,0.4)",
      borderColor: "rgba(131,138,133,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(131,138,133,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(131,138,133,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 80, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200]
    },
    {
      fill: false,
      label: 'My Second Dataset',
      lineTension: 0,
      backgroundColor: "rgba(47,153,76,0.4)",
      borderColor: "rgba(47,153,76,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(47,153,76,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(47,153,76,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 110, 120, 135, 140, 150, 160, 170, 180, 190, 200, 210]
    }
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          var label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          label += context.parsed.y;
          return label;
        },
      },
    },
  },
  legend: {
    display: false,
    position: "bottom",
  },
  scales: {
  x: {
    grid: {
      display: false,
    }
  },
  }
};

const LineChart = () => {
 const { currentMode } = useSateContext()
  
  return (
    <div style={{height: '450px'}}>
      <Line  data={data} options={options} style={{backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff'}} />
    </div>
  );
};

export default LineChart;
