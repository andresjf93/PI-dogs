import Atropos from 'atropos/react';
import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

function DogCard({ dog }) {
  const { id, name, image, temperament, weight } = dog;

  return (
    
    <Atropos  className="card">
      <Link to={`/detail/${id}`}>
        <img className="cardimg"src={image} alt={name} />
      </Link>
      <h2 className='namedog'>{name}</h2>
      <div className='dogstex'>Temperaments: {temperament}
      <  > 
      </ >
      <> 
      </>        Peso: {weight} KG</div>
    </Atropos>
  );
}

export default DogCard;

