import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDog, fetchTemperaments } from "../../Redux/actions";
import "./FormCreate.css";

export default function FormCreateDog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const temperamentos = useSelector((state) => state.temperament); // Accede a los temperamentos desde el estado
  const [newTemperament, setNewTemperament] = useState("");
   
  const [inputsMetric, setInputsMetric] = useState({
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
  });

  const [inputs, setInputs] = useState({
    name: "",
    height:  "" ,
    weight:  "" ,
    life_span: "",
    temperament: "",
    image: "",
  });

  useEffect(() => {
    dispatch(fetchTemperaments());
  }, [dispatch]);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setInputs({
      ...inputs,
      height:  `${inputsMetric.minHeight} - ${inputsMetric.maxHeight}`,
      
      weight: `${inputsMetric.minWeight} - ${inputsMetric.maxWeight}`,
      
    });
  }, [inputsMetric]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleTemperamentChange = (event) => {
    if (newTemperament === "") {
      setNewTemperament(event.target.value);
    } else {
      if (!newTemperament.includes(event.target.value)) {
        let temp = newTemperament.concat(`, ${event.target.value}`);
        setNewTemperament(temp);
      }
    }
  };

  const handleCreateTemperament = () => {
    setInputs({
      ...inputs,
      temperament: newTemperament,
    });
    setNewTemperament("");
  };
  const handleChangeImageUrl = (event) => {
    const { value } = event.target.value;
    setInputs({
      ...inputs,
      image: value,
    });
  };
  const handleChangeHW = (event) => {
    const { name, value } = event.target;
    setInputsMetric({
      ...inputsMetric,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log(inputs);
      dispatch(createDog(inputs));
      setInputs({
        name: "",
        height:  "" ,
        weight:  "" ,
        life_span: "",
        temperament: "",
        image: "",
      });
      navigate("/home");
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!inputs.name.trim() || /\d/.test(inputs.name)) {
      errors.name = "El nombre es obligatorio y no puede contener números.";
    }

    // Validar que la altura mínima sea menor o igual a la altura máxima
    if (
      inputsMetric.minHeight &&
      inputsMetric.maxHeight &&
      inputsMetric.minHeight > inputsMetric.maxHeight
    ) {
      errors.minHeight =
        "La altura mínima no puede ser mayor que la altura máxima.";
    }

    // Validar que el peso mínimo sea menor o igual al peso máximo
    if (
      inputsMetric.minWeight &&
      inputsMetric.maxWeight &&
      inputsMetric.minWeight > inputsMetric.maxWeight
    ) {
      errors.minWeight =
        "El peso mínimo no puede ser mayor que el peso máximo.";
    }

    // Puedes agregar más validaciones según tus necesidades
    console.log(errors);
    return errors;
  };

  return (
    <div className="contenete">
    <div >
      <form className="containerform" 
      onSubmit={handleSubmit}>
        <label className="titeleform">Nombre:</label>
        <input
          className="formimput"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type="text"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label className="titeleform">Altura Mínima:</label>
        <input
          className="formimput"
          name="minHeight"
          value={inputsMetric.minHeight}
          onChange={handleChangeHW}
          type="number"
        />
        <label className="titeleform">Altura Máxima:</label>
        <input
          className="formimput"
          name="maxHeight"
          value={inputsMetric.maxHeight}
          onChange={handleChangeHW}
          type="number"
        />
        {errors.minHeight && <p className="error">{errors.minHeight}</p>}

        <label className="titeleform">Peso Mínimo:</label>
        <input
          className="formimput"
          name="minWeight"
          value={inputsMetric.minWeight}
          onChange={handleChangeHW}
          type="number"
        />

        <label className="titeleform">Peso Máximo:</label>
        <input
          className="formimput"
          name="maxWeight"
          value={inputsMetric.maxWeight}
          onChange={handleChangeHW}
          type="number"
        />
        {errors.minWeight && <p className="error">{errors.minWeight}</p>}

        <label className="titeleform">Años de vida:</label>
        <input
          className="formimput"
          name="life_span"
          value={inputs.life_span}
          onChange={handleChange}
          type="number"
        />
 {/* Campo para ingresar la URL de la imagen */}
 <label className="titeleform">URL de la imagen:</label>
        <input
          className="formimput"
          name="image"
          value={inputs.image}
          onChange={handleChangeImageUrl}
          type="URL"
        />

        {/* Imágenes predefinidas */}
        <label className="titeleform">Imágenes predefinidas:</label>
        <div className="predefined-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWXahmv3S60dKqGOGstaeN7QdR6zgj8HOWA&usqp=CAU"
            alt="Predefinida 1"
            onClick={() =>
              setInputs({
                ...inputs,
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWXahmv3S60dKqGOGstaeN7QdR6zgj8HOWA&usqp=CAU",
              })
            }
          />
          <img
            src="https://aperrados.com/wp-content/uploads/2017/01/golden-retriever-fondo-blanco-700x525.jpg"
            alt="Predefinida 2"
            onClick={() =>
              setInputs({
                ...inputs,
                image:
                  "https://aperrados.com/wp-content/uploads/2017/01/golden-retriever-fondo-blanco-700x525.jpg",
              })
            }
          />
          {/* Agregar más imágenes predefinidas según sea necesario */}
        </div>
        <label className="titeleform">Temperamentos:</label>
        <select className="selectmuti"
          multiple
          name="temperament"
          value={newTemperament}
          onChange={handleTemperamentChange}
        >
          <option value="" disabled>
            Selecciona un temperamento
          </option>
          {temperamentos.map((temperament) => (
            <option key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>

        <button type="button" onClick={handleCreateTemperament}>
          Asignar Temperamentos
        </button>

        <button type="submit">Crear Raza</button>
      </form>
      </div>
      {/* Vista previa */}
      <div className="preview-section">
        <div className="preview">
          <h2>Vista Previa:</h2>
          <p>Nombre: {inputs.name}</p>
          <p>Altura: {inputs.height.metric}</p>
          <p>Peso: {inputs.weight.metric}</p>
          <p>Años de vida: {inputs.life_span}</p>
          <p>Temperamentos: {inputs.temperament}</p>
          <p>imagen
          {inputs.image && (<img src={inputs.image} alt="Vista previa de la imagen" />
            
          )}</p>
        </div>
      </div>
    </div>
  );
}
