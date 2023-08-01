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
  SEARCH_DOGS_REDUX,
  RESET_FILTERS
} from "./actionTypes";
import axios from "axios";

export const allDogs = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/Dogs");
      console.log(data);
      dispatch({
        type: ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const searchDogsRedux = (obj) => {
  return {
    type: SEARCH_DOGS_REDUX,
    payload: obj,
  };
};
export const filterTemperament = (temperament) => {
  return { type: FILTER_BY_TEMPERAMENT, payload: temperament };
};
//Accion para buscar perros
export const searchDogs = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/Dogs/name?name=${name}`
      );
      dispatch({
        type: SEARCH_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTemperaments = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/temperament");
      if (!response.ok) {
        throw new Error("Error al obtener los temperamentos.");
      }

      const data = await response.json();

      // Dispatch la acción con los temperamentos obtenidos
      dispatch({ type: FETCH_TEMPERAMENTS_SUCCESS, payload: data });
    } catch (error) {}
  };
};

// Acción para aplicar el ordenamiento
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
      const { data } = await axios.post("http://localhost:3001/dogs", dog);
      dispatch({
        type: CREATE_DOG,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function prev() {
  return {
    type: PREV,
  };
}
export function next() {
  return {
    type: NEXT,
  };
}
//!resetFilterAll
export const resetFilterAll = () => {
  return { type: RESET_FILTERS };
};
