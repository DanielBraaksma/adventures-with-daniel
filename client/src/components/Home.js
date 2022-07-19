import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorldMap from "./WorldMap";
import BarChart from "./BarChart";
import iso3311a2 from "iso-3166-1-alpha-2";
// https://codesandbox.io/s/ll9r7wxkmq?file=/src/index.js:0-555 great resource for making map

export default function Home() {
  const [vote, setVote] = useState("");

  const countriesList = iso3311a2.getCountries();
  console.log(countriesList);

  function handleFormChange (event) {
    const { name, value } = event.target;
    setVote({
      [name]: value,
    });
  };

  function handleFormSubmit (event){
    event.preventDefault()
  }

  return (
    <div>
      <div className="intro-container">
        <h4 className="subtitle">
          Welcome to a catalogue of my travels and whereabouts
        </h4>
        <p className="subtitle-text">
          To learn more about me and this project click{" "}
          <Link to="/about">here</Link>
        </p>
      </div>
      <WorldMap />
      {/* <div>listview of trips</div> */}
      <div className="poll-label">
        <h5 className="poll-title">Poll</h5>
        <p>
          Visitor Recommendations<br></br>
          Where would you recommend travelling to?
        </p>
        <form onSubmit={handleFormSubmit}>
          <select
            id="country-vote"
            value={vote}
            onChange={handleFormChange}
            name="country-vote"
          >
            {countriesList.map((name) => (
              <option value={name}>{name}</option>
            ))}
          </select>
          <input type="submit" value="Vote"/>
        </form>
      </div>
      <BarChart />
    </div>
  );
}
