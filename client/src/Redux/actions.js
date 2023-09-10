import {
  ALL_DOGS,
  ORDER_A_Z,
  NEXT,
  PREV,
  SET_ORDER_WEIGHT,
  SEARCH_DOGS,
  CREATE_DOG,
  FETCH_TEMPERAMENTS_SUCCESS,
  FILTER_BY_TEMPERAMENT,
  RESET_FILTERS,
  APIDOGS,
  DBDOGS,
  RESET_PAG,
} from "./actionTypes";
import axios from "axios";

export const allDogs = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("https://pi-dogs-andresjf93.netlify.app/Dogs");
      dispatch({
        type: ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      alert("ERROR al cargar los PERROS de la API");
    }
  };
};
export const apiDb = () => {
  return {
    type: APIDOGS,
  };
};
export const searchDb = () => {
  return {
    type: DBDOGS,
  };
};
export const filterTemperament = (temperament) => {
  return { type: FILTER_BY_TEMPERAMENT, payload: temperament };
};
export const searchDogs = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `https://pi-dogs-andresjf93.netlify.app/dogs/name/?name=${name}`
      );
      dispatch({
        type: SEARCH_DOGS,
        payload: data,
      });
    } catch (error) {
      alert( "NOMBRE del perro no encontrado");
    }
  };
};

export const fetchTemperaments = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://pi-dogs-andresjf93.netlify.app/temperament");
      if (!response.ok) {
        throw new Error("Error al obtener los temperamentos.");
      }
      const data = await response.json();
      dispatch({ type: FETCH_TEMPERAMENTS_SUCCESS, payload: data });
    } catch (error) {
      alert("ERROR no se pudo traer los temperamentos");
    }
  };
};

export function setOrder(order) {
  return {
    type: ORDER_A_Z,
    payload: order,
  };
}
export const setOrderWeight = (payload) => ({
  type: SET_ORDER_WEIGHT,
  payload,
});

export const createDog = (dog) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("https://pi-dogs-andresjf93.netlify.app/dogs", dog);
      const pepe = {
        ...data,
        height: JSON.parse(data.height),
        weight: JSON.parse(data.weight),
      };
      dispatch({
        type: CREATE_DOG,
        payload: pepe,
      });
    } catch (error) {
      alert("error al crear un Perro en la BD")
    }
  };
};

export function prev() {
  return {
    type: PREV,
  };
}
/*export function resetPag(){
  return{
    type:  RESET_PAG,
  }
}*/
export function next() {
  return {
    type: NEXT,
  };
}
export const resetFilterAll = () => {
  return { type: RESET_FILTERS };
};
