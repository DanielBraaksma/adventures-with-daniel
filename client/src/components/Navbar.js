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
          <h4>Home</h4>
        </Link>
        <Link to="/about">
          <h4>About</h4>
        </Link>
        <Link to="/photos">
          <h4>Photos</h4>
        </Link>
        <Link to="/articles">
          <h4>Blog</h4>
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
