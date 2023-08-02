import { useNavigate, useParams, Link } from "react-router-dom";
import "./Detailstyle.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DogDetailPage = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const { origDogs } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    const dog = origDogs?.find((dg) => dg.id === Number(id));
    if (dog) {
      setDog(dog);
    } else {
      window.alert("No hay personajes con ese ID");
      navigate("/error");
    }
  }, [id, origDogs]);

  return (
    <div>
      <div>
        <Link to={"/home"}>
          <button className="botonhome"></button>
        </Link>
      </div>
      <div className="main-container">
        <div className="id">ID: {id}</div>
        <div className="image-container">
          <img className="imagen" src={dog.image} alt={dog.name} />
        </div>
        <div className="details-container">
          <h1>{dog.name}</h1>
          <h2>Temperamentos: {dog.temperament}</h2>
          <h3>Altura: {dog.weight} CM</h3>
          <h3>Peso: {dog.height} KG</h3>
          <h3>Años de vida: {dog.life_span}</h3>
        </div>
      </div>
    </div>
  );
};

export default DogDetailPage;
