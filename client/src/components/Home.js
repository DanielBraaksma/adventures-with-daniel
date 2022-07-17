import React from "react";
import {Link } from "react-router-dom"
import WorldMap from "./WorldMap";
import BarChart from "./BarChart";
// https://codesandbox.io/s/ll9r7wxkmq?file=/src/index.js:0-555 great resource for making map

export default function Home() {
  const [mapkey, setMapKey] = React.useState(0);



  return (
    <div>
      <div className="intro-container">
        <h4 className="subtitle">
          Welcome to a catalogue of my travels and whereabouts
        </h4>
        <p className="subtitle-text">
          To learn more about me and this project click <Link to="/about">here</Link>
        </p>
      </div>
      <WorldMap key={mapkey} />
      {/* <div>listview of trips</div> */}
      <div className="top-countries-poll">
        <h5 className="poll-title">Poll</h5>
        <p>Visitor Recommendations<br></br>
        Where would you recommend travelling to?</p>
      </div>
    <BarChart />

    </div>
  );
}
