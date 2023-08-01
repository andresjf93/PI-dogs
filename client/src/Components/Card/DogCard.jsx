import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";


function DogCard(props) {
  const { id, name, image, temperament, weight } = props.dog;
  

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img
          src={image}
          alt={name}
        />
    </Link>
        <h2>{name}</h2>
        <h3>Temperaments: {temperament}</h3>
        <h4>Peso: {weight} KG</h4>
      </div>
  );
}

export default DogCard;
