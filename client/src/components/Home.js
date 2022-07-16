import React from "react"
import WorldMap from "./WorldMap"
// https://codesandbox.io/s/ll9r7wxkmq?file=/src/index.js:0-555 great resource for making map

export default function Home () {

    return (
        <div>
            <div className="intro-container">
                <h4 className="subtitle">Welcome to a catalogue of my travels and whereabouts</h4>
                <p className="subtitle-text">To learn more about me and this project click here</p>

            </div>
            <WorldMap />
        </div>
    )
}
