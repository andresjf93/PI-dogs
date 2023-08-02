
import "./Cards.css";
import React from "react";
import DogCard from "../Card/DogCard";
import { useSelector } from "react-redux";
import Paginate from "../paginado/Paginado";

function Cards() {
  const dogs = useSelector((state) => state.Dogs);
  const numPage = useSelector((state) => state.numPage);

  const cantDogPage = 8;
  let desde = (numPage - 1) * cantDogPage;
  let hasta = numPage * cantDogPage;
  let cantPage = Math.ceil(dogs.length / cantDogPage);
  const viewDogs = dogs.slice(desde, hasta);

  return (
    <div>
      <div  className="cards-container">
        {viewDogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
      <div className="pagination">
        <Paginate className="paginate" numPage={numPage} cantPage={cantPage} />
      </div>
          </div>
    
  );
}

export default Cards;
