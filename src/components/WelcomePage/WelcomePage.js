import React from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      <nav className="App-header">
        <img src="smile.png" className="App-logo" alt="logo" />
        <p className="animate__animated animate__rubberBand animate__delay-3s">
          Welcome to Market List!!
        </p>
        <Link className="nav__link link" to="/mylist">
          Go to my List
        </Link>
      </nav>
    </div>
  );
}

export default WelcomePage;
