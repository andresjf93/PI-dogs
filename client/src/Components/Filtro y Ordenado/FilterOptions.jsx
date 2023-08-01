import React, { useEffect, useState } from 'react';
import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setOrder, setOrderWeight, fetchTemperaments , filterTemperament} from "../../Redux/actions";

const FilterOptions = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperament);
  const [selectedTemperaments, setSelectedTemperaments] = useState("");
  
  useEffect(() => {
    dispatch(fetchTemperaments());
  }, []);
  
  const handleSelectChange = (event) => {
    dispatch(filterTemperament(event.target.value))
  };


  const handleAtoZ = (event) => {
    const { value } = event.target;
    dispatch(setOrder(value));
  };
  
  const handleWeight = (event) => {
    const { value } = event.target;
    dispatch(setOrderWeight(value));
  };

  return (
    <div className="filter-options">
      <nav className='barr'>
        <select value={selectedTemperaments} onChange={handleSelectChange}>
          {allTemperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>
        <select onChange="">
          <option value="api">API</option>
          <option value="baseDeDatos">Base de Datos</option>
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
        <select className='selectmutiple'
          name="orden por peso"
          onChange={handleWeight}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT">Seleccionar Orden:</option>
          <option value="minWEIGHT">Mínimo</option>
          <option value="WEIGHT">Máximo</option>
        </select>
      </nav>
    </div>
  );
};

export default FilterOptions;
