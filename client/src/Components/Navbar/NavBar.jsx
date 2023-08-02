import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"; // 2. Utiliza el componente Link para crear enlaces
import { searchDogs } from "../../Redux/actions";
import "./NavBar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");



  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const search = () => {
    dispatch(searchDogs(searchText));
  };

  return (
    <nav className="menu">
      <div className="logo"></div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>{" "}
        
        <li>
          <a className="dropdown-arrow" href="/pro">
            Products
          </a>
        </li>
        <ul className="sub-menus">
          <li>
            <b href="/pro">Products 1</b>
          </li>
          <li>
            <b href="/pro">Products 2</b>
          </li>
        </ul>
        <li>
          <Link to="/create">Create</Link>
        </li>{" "}
      
        <li>
          <a className="dropdown-arrow" href="serv">
            Services
          </a>
          <ul className="sub-menus">
            <li>
              <b href="/ser">Services 1</b>
            </li>
            <li>
              <b href="/serv">Services 2</b>
            </li>
          </ul>
        </li>
        <li>
          <input
            className="imputsearch"
            type= "search"
            placeholder="Buscar..."
            value={searchText}
            onChange={handleSearch}
          />
          <button className="searchboton" onClick={search}>
            Buscar
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
