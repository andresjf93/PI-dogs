import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { searchDogs, searchDogsRedux } from "../../Redux/actions";

const Navbar = () => {
 
  const {origDogs} = useSelector(state => state)

  const dispatch = useDispatch ()
  const [searchText, setSearchText] = useState("");
useEffect(()=>{
  const encontrado = origDogs.filter(perro =>perro.name.toLowerCase().includes(searchText))
    dispatch(searchDogsRedux(encontrado))
},[searchText])
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  
  };
  const search = () => {
    dispatch(searchDogs(searchText));
    };
  return (
    <nav className='menu'>
      <div className="logo"></div>
  <ul>
             <li><a href='/home'>Home</a></li>
          <li><a class='dropdown-arrow' href='/pro'>Products</a></li>
      <ul class='sub-menus'>
      <div><b href='/pro'>Products 1</b></div>
        <div><b href='/pro'>Products 2</b></div>
      </ul>
      
      <li><a href='/create'>Create</a></li>
      <li><a class='dropdown-arrow' href='serv'>Services</a>
      <ul class='sub-menus'>
        <div><b href='/ser'>Services 1</b></div>
        <div><b href='/serv'>Services 2</b></div>
      </ul>
    </li>
    <li>
      <input className="imputsearch" type="text"
          placeholder="Buscar..."
          value={searchText}
          onChange={handleSearch}
        />
        <button className="searchboton"onClick={search}>Buscar</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
