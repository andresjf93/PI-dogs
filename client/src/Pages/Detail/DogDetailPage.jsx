import { useNavigate, useParams } from "react-router-dom";
import "./Detailstyle.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const DogDetailPage = () => {
  const {id} = useParams();
  const [dogs, setdogs]= useState({})
  const dispatch = useDispatch();
  const { origDogs } = useSelector((s) => s);
  
  useEffect(() => {
    const dog = origDogs?.find((dg) => dg.id === Number(id));
    if (dog) setdogs(dog);
    else window.alert("No hay personajes con ese ID");
    
  }, [id]);

  return (
    <div className="main-container"> 
     <Link className="boton.home" to={"/home"}>
        <button>Home</button>
      </Link>
      <h3>Id: {id}</h3>
       <div className="image-container">
      <img className="imagen" src={dogs.image?.url} alt={dogs.name}></img>
    </div>
    <div className="details-container">
      <h1>{dogs.name}</h1>
      <h2>Temperamentos: {dogs.temperament}</h2>
      <h3>Altura: {dogs.weight?.metric}</h3>
      <h3>Peso: {dogs.height?.metric}</h3>
      <h3>Años de vida: {dogs.life_span}</h3>
    </div>
   
  </div>
)
  }
export default DogDetailPage;
