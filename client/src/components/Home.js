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

  async function handleFormSubmit (event){
    event.preventDefault()
    console.log(vote.countryVote)
    fetch("http://localhost:5000/votes/add", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            "countryName" : vote.countryVote,
            "votes" : 1
          }) // body data type must match "Content-Type" header
      })
      .then((response =>response.json()))
      .then((data) =>console.log(data))
      .catch(error => console.error("Error:", error))
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
            id="countryVote"
            value={vote}
            onChange={handleFormChange}
            name="countryVote"
          > <option value="select country">select country</option>
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

//Add a funcitonality that gives feedback to user based on what they voted. ex:
// thanks for sharing, I agree.. or Thanks for sharing, i'd love to check it out.
