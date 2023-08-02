import "./Homestyle.css";
import React from "react";
import Navbar from "../../Components/Navbar/NavBar";
import DogCards from "../../Components/Cards/Cards";
import OrderandFavBar from "../../Components/Filtro y Ordenado/FilterOptions";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <OrderandFavBar />
      <h1 className="hp">ESCOJE A TU NUEVO MEJOR AMIGO</h1>
      <DogCards />
    </div>
  );
};

export default HomePage;
