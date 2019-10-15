import React, { Component } from "react";
import Chart from "chart.js";

export default class LineChart extends Component {
  componentDidMount() {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data:
        // { x: "2019-01-01", y: 3869.47 },
        // { x: "2019-01-02", y: 3941.2167 },
        // { x: "2019-01-03", y: 3832.155 }
        {
          // labels: ["2019-01-01", "2019-01-02", "2019-01-03"],
          datasets: [
            {
              label: "Closing Price",
              data: [
                // {
                //   x: "1980-01-01",
                //   y: 10
                // },
                // {
                //   x: "1980-06-01",
                //   y: 5
                // },
                // {
                //   x: "1981-01-01",
                //   y: 20
                // }
                { x: "2019-01-01", y: 3869.47 },
                { x: "2019-01-02", y: 3941.2167 },
                { x: "2019-01-03", y: 3832.155 },
                {
                  x: "2019-01-04",
                  y: 3863.6267
                },
                { x: "2019-01-05", y: 3835.5983 }
              ]
            }
          ]
        },
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
              // time: {
              //   unit: "day"
              // },
              ticks: {
                source: "data",
                autoSkip: true
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Closing price ($)"
              }
            }
          ]
        }
      }
    });
  }
  render() {
    return (
      <div>
        <canvas id="myChart" width="800" height="400"></canvas>
      </div>
    );
  }
}
