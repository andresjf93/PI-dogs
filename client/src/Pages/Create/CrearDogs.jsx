import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDog } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import "./FormCreate.css";
import axios from "axios";

function CreateDogs() {
  const createDog = async () => {
    const response = await axios.post("http://localhost:3001/dogs", {
      name: "",
      height: "",
      weight: "",
      yearsLife: "",
      temperaments: "",
    });
    console.log(response);
  };

return (
    <div>
      
       <Link className="boton.home" to={"/home"}>
        <button>Home</button>
      </Link>
<button onClick={createDog}> Crear perrito </button>;
</div>
)}
export default CreateDogs;
