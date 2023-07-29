import { Route, Routes } from "react-router-dom";
import "./App.css";
import CrearDog from "./Pages/Create/CrearDogs";
import DogDetailPage from "./Pages/Detail/DogDetailPage";
import LandingPage from "./Pages/Landing/LandingPag";
import HomePage from "./Pages/Home/HomePage";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route  path="/detail/:id" element={<DogDetailPage />} />
        <Route  path="/create" element={<CrearDog />} />
      </Routes>
    </div>
  );
}

export default App;
