import React, { useState } from "react";
import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setOrder,
  setOrderWeight,
  filterTemperament,
  resetFilterAll,
  apiDb,
  searchDb,
} from "../../Redux/actions";

const FilterOptions = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperament);
  const [selectedTemperaments, setSelectedTemperaments] = useState("");

 

  const handleSelectChange = (event) => {
    setSelectedTemperaments(event.target.value);
    dispatch(filterTemperament(event.target.value));
  };
const handleApiDb= (event)=> {
if (event.target.value==="api") {
  dispatch(apiDb())
}else if(event.target.value=== "db"){
  dispatch(searchDb())
}
}
  const handleAtoZ = (event) => {
    const { value } = event.target;
    dispatch(setOrder(value));
  };

  const handleWeight = (event) => {
    const { value } = event.target;
    dispatch(setOrderWeight(value));
  };
  const handleResetFilters = () => {
    dispatch(resetFilterAll());
  };

  return (
    <div className="filter-options">
      <nav className="barr">
        <div className="selectmultiple">FILTER TEMPERAMENTOS
          <select  value={selectedTemperaments} onChange={handleSelectChange}>
            <option value= "">Select</option>
            {allTemperaments.map((temperament) => (
              <option key={temperament.id} value={temperament.name}>
                {temperament.name}
              </option>
              
            ))}
          </select>
        </div>
        <div className="selectmultiple">  FILTER API-DB
          <select onChange={handleApiDb}>
            <option value="">ORIGEN</option>
            <option value="api">API</option>
            <option value="db">DB</option>
          </select>
        </div>
        <div className="selectmultiple"> ORDENADO ALFABETICO
          <select
            name="orden alfabetico"
            onChange={handleAtoZ}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT">Select Order:</option>
            <option value="A">A-z</option>
            <option value="D">Z-a</option>
          </select>
        </div>
        <div className="selectmultiple"> ORDENADO POR PESO
          <select
            name="orden por peso"
            onChange={handleWeight}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT">Seleccionar Orden:</option>
            <option value="minWEIGHT">Mínimo</option>
            <option value="WEIGHT">Máximo</option>
          </select>
        </div>
        <button className="reset" onClick={handleResetFilters}>RESET</button>
      </nav>
    </div>
  );
};

export default FilterOptions;
