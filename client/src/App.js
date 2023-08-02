import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { allDogs, fetchTemperaments } from './Redux/actions.js';
import CrearDog from "./Pages/Create/CrearDogs";
import DogDetailPage from "./Pages/Detail/DogDetailPage";
import LandingPage from "./Pages/Landing/LandingPag";
import HomePage from "./Pages/Home/HomePage";
import ErrorNotFound from "./Pages/404/ErrorNotFound"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allDogs());
    dispatch(fetchTemperaments());
  }, []);
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/detail/:id" element={<DogDetailPage />} />
          <Route path="/create" element={<CrearDog />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      <footer className="footer">
        {/* Contenido del footer, como información de contacto, enlaces, etc. */}
        © {new Date().getFullYear()} Mi Sitio Web DULCES PATITAS. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
