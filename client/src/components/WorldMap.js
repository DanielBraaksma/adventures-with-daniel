import React from "react";
import Chart from "react-google-charts";

export default function WorldMap (props) {
    const data = [
        ["Country", "Date Visited"],
        ["Kenya", 200],
        ["United States", 300],
        ["Uganda", 400],
        ["Vietnam", 500],
        ["Thailand", 500],
        ["Laos", 500],
        ["Cambodia", 500],
        ["Malaysia", 500],
        ["Philippines", 600],
        ["Philippines", 600],
        ["Indonesia", 600],
        ["Tanzania", 700],
        ["Netherlands", 700],
        ["South-Sudan", 700],
        ["Germany", 700]
      ];

    return (
        <div className="App">
        <Chart chartType="GeoChart" width="100%" height="800px" data={data} />
      </div>
    )
}
