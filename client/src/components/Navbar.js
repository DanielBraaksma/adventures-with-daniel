import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1>Adventures with Daniel</h1>
      <nav ref={navRef}>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
        <Link to="/photos">
          <h2>Photos</h2>
        </Link>
        <Link to="/articles">
          <h2>Blog</h2>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
