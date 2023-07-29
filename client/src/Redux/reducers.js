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

const initialState = {
  origDogs: [], // Array con las razas de perros obtenidas desde la API o la base de datos
  Dogs: [],
  Search: [], // Filtro aplicado para la búsqueda por nombre
  numPage: 1,
  temperaments: [],
  dogsCreate: [],
};

const allDogs = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        origDogs: action.payload,
        Dogs: action.payload,
      };
    case SEARCH_DOGS:
      return {
        ...state,
        Dogs: [...action.payload],
      }
      case CREATE_DOG:
        return {
            ...state,
            temperaments: action.payload
        }
        case GET_TEMPERAMENTS:
          return {
              ...state,
              temperaments: action.payload
          }
          case FILTER_TEMPERAMENTS: 
            let resultTemperaments;
            if(state.displayState.all) resultTemperaments = state.origDogs.filter( dog => dog.temperaments.includes(action.payload));
            if(state.displayState.api) resultTemperaments = state.Dogs.filter( dog => dog.temperaments.includes(action.payload));
            if(state.displayState.create) resultTemperaments = state.dogsCreate.filter( dog => dog.temperaments.includes(action.payload));
            return {
                ...state,
                Dogs: resultTemperaments
                
               
            }
    case ORDER_A_Z:
      return {
        ...state,
        Dogs: [...state.origDogs].sort((a, b) => {
          if (action.payload === "A") {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          } else {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          }
        }),
      };
    case SET_ORDER_WEIGHT:
      let resultWeight;
      // funcion que me ordena la data y le paso si es minimo o máximo
      let order = (data,typeOrder) => {
          return data.sort( (a,b) => {
              if(typeOrder === "minimun") {
                  return Number(a.weight.split("-")[1]) - Number(b.weight.split(" - ")[1]) 
              } else {
                  return Number(b.weight.split("-")[1]) - Number(a.weight.split(" - ")[1])
              }
          })
      }

      if(state.displayState.all) {
          //console.log("tipo:", payload);
          resultWeight = order(state.origDogs,action.payload);
      } 
      if(state.displayState.api) {
          resultWeight = order(state.Dogs,action.payload);
      } 
      if(state.displayState.create) {
          resultWeight = order(state.dogsCreate,action.payload);
      } 
      return {
          ...state,
          Dogs: resultWeight
       
      }
    case PREV:
      // Reducir el número de página actual en 1
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    case NEXT:
      // Aumentar el número de página actual en 1
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    default:
      return state;
  }
};

export default allDogs;
