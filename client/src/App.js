import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import CastVote from "./components/CastVote";

function App() {
  React.useEffect(() => {
    // window.addEventListener("resize", ()=>window.location.reload());
    // // window.location.reload()
    // return () => {
    //         window.removeEventListener("resize", ()=>window.location.reload());
    //       };
  });

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/castVote" element={<CastVote />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// /* <Route path="/votes" element={<CastVote />} /> */
