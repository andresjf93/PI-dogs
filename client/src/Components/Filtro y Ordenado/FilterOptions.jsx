import React from "react";
import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import { filterTemperaments, resetFilterAll, setOrder, sortByWeight } from "../../Redux/actions";

const FilterOptions = () => {
  const temperament = useSelector( state => state.temperaments );
  const dispatch = useDispatch();
  const display = useSelector( state => state.displayState );

  const handlefilter = (e) => {
    if(e.currentTarget.name === "temperaments") {
        const temperamentSearch = e.target.value;
        dispatch(filterTemperaments(temperamentSearch));
}
  }
  const handleAtoZ = (event) => {
    const { value } = event.target;
    dispatch(setOrder(value));
  };
  const handleWeight = (event) => {
    const { value } = event.target;
    dispatch(sortByWeight(value));
  };

  return (
    <div className="filter-options">
      <nav>
        <select
          name="temperament"
          onChange={handlefilter}
          defaultValue={"DEFAULT"}
        >{
          Array.isArray(temperament) && temperament?.map( (temperament, index) => {
              return <option value={temperament.name} key={index}>{temperament.name}</option>
          }) 
      }
  </select>
        <select
          name="orden alfabetico"
          onChange={handleAtoZ}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT">Select Order:</option>
          <option value="A">A-z</option>
          <option value="D">Z-a</option>
        </select>
        <select onChange={handleWeight} name="weight">
                    <option value="minimun">Minimun</option>
                    <option value="maximum">Maximum</option>
                    </select>
      </nav>
    </div>
  );
};

export default FilterOptions;
