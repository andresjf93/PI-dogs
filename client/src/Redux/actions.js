import {
  ALL_DOGS,
  ORDER_A_Z,
  NEXT,
  PREV,
  SET_ORDER_WEIGHT,
  SEARCH_DOGS,
  CREATE_DOG,
  GET_TEMPERAMENTS,
  RESET_FILTERS,
  FILTER_TEMPERAMENTS,
} from "./actionTypes";
import axios from "axios";

export const allDogs = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/Dogs");
      dispatch({
        type: ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
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

// filtrar por weight

//
export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/temperament");
      dispatch({ type: GET_TEMPERAMENTS, payload: data });
    } catch (error) {
      alert("error: " + error.response.data.error);
    }
  };
};
// Acción para aplicar filtros
export const filterTemperaments = (temperament) => {
  return { type: FILTER_TEMPERAMENTS, payload: temperament}
}
// Acción para aplicar el ordenamiento
export function setOrder(order) {
  return {
    type: ORDER_A_Z,
    payload: order,
  };
}
export const sortByWeight = (typeWeight) => {
  return { type: SET_ORDER_WEIGHT, payload: typeWeight}
}
  

export const createDog = (dog) => {
  return async (dispatch) => {
      try {
          const url = "http://localhost:3001/dogs";
          const config = {
              headers: {
                  'Content-Type': 'application/json'
              }
          };
          const {data} = await axios.post(url,dog,config);
          dispatch({type: CREATE_DOG, payload: data})
      } catch (error) {
          //console.log(error);
          alert("error: " + error.response.data.error);
      }
  }
}

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
  return { type: RESET_FILTERS }
}
