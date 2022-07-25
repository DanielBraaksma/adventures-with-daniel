import React from "react";
import { Chart } from "react-google-charts";


export default function BarChart({voteData}) {

  // reformat the voteData into an array of arrays for the chart data
  const voteDataReformat = voteData.map(v => {
    return [v.countryName, parseInt(v.votes)]
  })

  // Need to include the labels for the chart to work, spread the other data in.
  const data = [["Country", "votes"], ...voteDataReformat]


  const options = {
    title: "Top 10 recommendations from site visitors",
    chartArea: { width: "50%" },
    isStacked: true,
    colors: ["#7AB195", "#ffab91"],
    hAxis: {
      title: "Votes",
      minValue: 0,
    },
    vAxis: {
      title: "Country",
    },
  };

  return (
    <div className="barchart">
        <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data.length > 10 ? data.slice(0, 11) : data}
        options={options}
        />
    </div>
  );
}
