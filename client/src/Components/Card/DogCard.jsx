import "./Card.css";
import React from "react";
import { connect } from "react-redux";
import { setFilter, setOrder } from "../../Redux/actions";
import { Link } from "react-router-dom";

const Url = "https://cdn2.thedogapi.com/images/";
const ApyKey = "live_OpWeDwwedZ4fuKBztYvZOhVPTs6r8UP0No0PUvIrEFP846D1EwL14Aq6jaRSwmB6";

function DogCard(props) {
  const { id, name, reference_image_id, temperament, weight } = props.dog;
  

  return (
    <Link to={`/detail/${id}`}>
      <div className="card">
        <img
          src={`${Url}${reference_image_id}.jpg?api_key=${ApyKey}`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>Temperaments: {temperament}</p>
        <p>peso: {weight.metric}</p>
      </div>
    </Link>
  );
}

export default DogCard;
