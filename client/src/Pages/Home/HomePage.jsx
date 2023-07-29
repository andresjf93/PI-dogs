import "./Homestyle.css";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { allDogs ,setFilter, setOrder } from '../../Redux/actions.js';
import Navbar from "../../Components/Navbar/NavBar";
import DogCards from "../../Components/Cards/Cards";
import OrderandFavBar from "../../Components/Filtro y Ordenado/FilterOptions"

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch (allDogs());
  }, [allDogs]);

  
  return (
    <div className="home-page">
      <Navbar />

      <OrderandFavBar />
      <h1>Bienvenido a la Home Page</h1>
      
           <DogCards/>
    </div>
  );
};


export default HomePage;
