import React, { Component } from "react";
import LineChart from "./LineChart.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        BTC Prices
        <LineChart />
      </div>
    );
  }
}
