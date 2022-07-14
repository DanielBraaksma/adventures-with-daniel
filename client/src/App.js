import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import CastVote from "./components/CastVote"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/vote" element={<CastVote />} />
      </Routes>
    </div>
  );
}

export default App;


// /* <Route path="/votes" element={<CastVote />} /> */
