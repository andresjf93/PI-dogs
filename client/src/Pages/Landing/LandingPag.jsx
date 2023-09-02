import { Link } from "react-router-dom";
import "./Landingstyle.css";
import React from "react";

const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing-page">
      <h1>Sweet Paws</h1>
      <Link to="/home">
        <button className="boton" onClick={onEnter}></button>
      </Link>
      <h2>API Henry Dogs</h2>
    </div>
  );
};
export default LandingPage;
