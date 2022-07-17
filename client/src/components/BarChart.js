import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "votes"],
  ["Brazil", 81],
  ["Uganda", 37],
  ["France", 26],
  ["Italy", 20],
  ["Mongolia", 15],
  ["South Africa", 15],
  ["Australia", 15],
  ["USA", 15],
  ["Belize", 15],
];

export const options = {
  title: "Top 10 recommendations from site visitors",
  chartArea: { width: "50%" },
  colors: ["#ebcbf7", "#ffab91"],
  hAxis: {
    title: "Votes",
    minValue: 0,
  },
  vAxis: {
    title: "Country",
  },
};

export default function BarChart() {
  return (
    <div className="barchart">
        <Chart
        chartType="BarChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
        />
    </div>
  );
}
