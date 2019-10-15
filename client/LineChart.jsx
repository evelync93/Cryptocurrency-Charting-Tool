import React, { Component } from "react";
import Chart from "chart.js";
import axios from "axios";

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getPrices = this.getPrices.bind(this);
    this.renderChart = this.renderChart.bind(this);
  }
  getPrices() {
    return axios
      .get(
        "https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-10-14"
      )
      .then(({ data }) => {
        const prices = data;
        let pricesData = [];
        for (let key in prices.bpi) {
          let dayPrice = {};
          dayPrice.x = key;
          dayPrice.y = prices.bpi[key];
          // console.log("check dayprice", dayPrice);
          pricesData.push(dayPrice);
        }
        console.log(pricesData);
        this.setState({ data: pricesData });
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderChart() {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Closing Price",
            data: this.state.data
            // [
            //   { x: "2019-01-01", y: 3869.47 },
            //   { x: "2019-01-02", y: 3941.2167 },
            //   { x: "2019-01-03", y: 3832.155 },
            //   { x: "2019-01-04", y: 3863.6267 },
            //   { x: "2019-01-05", y: 3835.5983 }
            // ]
          }
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0
          }
        },
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
              time: {
                unit: "day"
              },
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
  componentDidMount() {
    this.getPrices().then(() => {
      this.renderChart();
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
