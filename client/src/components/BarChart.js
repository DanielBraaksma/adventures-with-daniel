import React from "react";
import { Chart } from "react-google-charts";


export default function BarChart({voteData}) {

  // reformat the voteData into an array of arrays for the chart data
  const voteDataReformat = voteData.map(v => {
    return [v.countryName, parseInt(v.votes)]
  })

  // Need to include the labels for the chart to work, spread the other data in.
  const allData = [["Country", "votes"], ...voteDataReformat]

  function findTop10 (){
    // sort all data by vote count
    let sortedArr = allData.sort((a,b)=> b[1] - a[1])
    // slice the sorted Array to only include top 10
    return sortedArr.slice(0, 11)
  }

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
        data={allData.length < 11 ? allData : findTop10()}
        options={options}
        />
    </div>
  );
}
