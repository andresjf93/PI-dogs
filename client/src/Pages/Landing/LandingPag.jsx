import { Link } from "react-router-dom";
import "./Landingstyle.css";
import React from "react";

const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing-page">
       <h1>Bienvenido a la aplicación</h1>
        <Link to="/home">
      
        <button className="boton"onClick={onEnter}></button>
      </Link>
      <h1>Henry Dogs</h1>
    </div>
  );
};
export default LandingPage;
