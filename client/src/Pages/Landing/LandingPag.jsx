import { Link } from "react-router-dom";
import "./Landingstyle.css";
import React from "react";
import welcomeimg from "./welcomedog.jpg";

const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing-page">
       <h1>Bienvenido a la aplicación</h1>
        <Link to="/home">
        <button onClick={onEnter}>Ingresar</button>
      </Link>
      <h1>Henry Dogs</h1>
    </div>
  );
};
export default LandingPage;
