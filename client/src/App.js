import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { allDogs } from './Redux/actions.js';
import CrearDog from "./Pages/Create/CrearDogs";
import DogDetailPage from "./Pages/Detail/DogDetailPage";
import LandingPage from "./Pages/Landing/LandingPag";
import HomePage from "./Pages/Home/HomePage";
import ErrorNotFound from "./Pages/404/ErrorNotFound"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch (allDogs());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route  path="/detail/:id" element={<DogDetailPage />} />
        <Route  path="/create" element={<CrearDog />} />
        <Route path="*" element={<ErrorNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
