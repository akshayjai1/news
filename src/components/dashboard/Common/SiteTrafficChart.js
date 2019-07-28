import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SiteTrafficChart extends Component {
  render() {
    const { height } = this.props;

    const data = canvas => {
      const ctx = canvas.getContext("2d");
      const _stroke = ctx.stroke;

      ctx.stroke = function() {
        ctx.save();
        ctx.shadowColor = "#4C4C4C";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        _stroke.apply(this, arguments);
        ctx.restore();
      };

      return {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "My First dataset",
            data: [
              5000,
              6000,
              3500,
              4900,
              3000,
              5000,
              2500,
              2000,
              3000,
              4000,
              2500,
              4500
            ],
            borderColor: "#00BCD4",
            borderWidth: 1,
            pointBackgroundColor: "#00BCD4",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#00BCD4",
            pointHoverBorderColor: "#fff",
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: false
          },
          {
            label: "My First dataset",
            data: [
              5000,
              6000,
              3500,
              4900,
              3000,
              5000,
              2500,
              2000,
              3000,
              4000,
              2500,
              4500
            ],
            borderColor: "#3F51B5",
            borderWidth: 1,
            pointBackgroundColor: "#3F51B5",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#3F51B5",
            pointHoverBorderColor: "#fff",
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: false
          },
          {
            label: "My First dataset",
            data: [
              1500,
              2000,
              1200,
              2400,
              1600,
              2200,
              1800,
              2200,
              2400,
              2600,
              2000,
              2400
            ],
            borderColor: "#FF9800",
            borderWidth: 1,
            pointBackgroundColor: "#FF9800",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#FF9800",
            pointHoverBorderColor: "#fff",
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: false
          },
          {
            label: "My First dataset",
            data: [
              1500,
              2000,
              1200,
              2400,
              1600,
              2200,
              1800,
              2200,
              2400,
              2600,
              2000,
              2400
            ],
            borderColor: "#4CAF50",
            borderWidth: 1,
            pointBackgroundColor: "#4CAF50",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#4CAF50",
            pointHoverBorderColor: "#fff",
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: false
          }
        ]
      };
    };

    const options = {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              suggestedMax: 10000,
              beginAtZero: true
            }
          }
        ]
      }
    };

    return <Line data={data} height={height} options={options} />;
  }
}

export default SiteTrafficChart;
