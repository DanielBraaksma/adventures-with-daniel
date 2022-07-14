import React from "react";
import Chart from "react-google-charts";

export default function WorldMap (props) {
    const data = [
        ["Country", "Date Visited"],
        ["Kenya", 500],
        ["United States", 500],
        ["Uganda", 500],
        ["Vietnam", 500],
        ["Thailand", 500],
        ["Laos", 500],
        ["Cambodia", 500],
        ["Malaysia", 500],
        ["Philippines", 500],
        ["Philippines", 500],
        ["Indonesia", 500],
        ["Tanzania", 500],
        ["Netherlands", 500],
        ["South-Sudan", 500],
        ["Germany", 500]
      ];

    const options = {
        backgroundColor: "lightblue",
        legend: "none",
    }

    return (
        <div className="map">
        <Chart chartType="GeoChart" max-width="100%" height="400px" data={data} options={options} borderRadius="20px"/>
      </div>
    )
}
