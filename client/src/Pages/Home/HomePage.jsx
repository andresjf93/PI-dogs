import "./Homestyle.css";
import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/NavBar";
import DogCards from "../../Components/Cards/Cards";
import OrderandFavBar from "../../Components/Filtro y Ordenado/FilterOptions"

const HomePage = () => {
 

  
  return (
    <div className="home-page">
    
      <Navbar />

      
        <OrderandFavBar />
     
      
        <h1 className="hp">Bienvenido a la Home Page</h1>
        <DogCards />
     
    </div>
  );
  }  


export default HomePage;
