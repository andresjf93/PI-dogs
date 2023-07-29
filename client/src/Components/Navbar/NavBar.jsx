import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../Redux/actions";

const Navbar = () => {
  const dispatch = useDispatch ()
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const search = () => {
    dispatch(searchDogs(searchText));
    setSearchText("");
  };
  return (
    <nav className="navbar">
          <div className="logo">Logo</div>  
           <Link className="boton.home" to={"/home"}>
        <button>Home</button>
      </Link>
      <Link className="boton.create" to={"/create"}>
        <div>Create</div>
      </Link>
      <Link className="boton.about" to={"/about"}>
        <div>About</div>
      </Link>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchText}
          onChange={handleSearch}
        />
        <button onClick={search}>Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;
