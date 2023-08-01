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
} from "./actionTypes";

const initialState = {
  origDogs: [], // Array con las razas de perros obtenidas desde la API o la base de datos
  Dogs: [],
  Search: [], // Filtro aplicado para la búsqueda por nombre
  numPage: 1,
  temperament: [],
  loading: false,
  error: null,
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
      console.log(state.Dogs);
      return {
        ...state,
        Dogs: [...action.payload],
      };
    case SEARCH_DOGS_REDUX:
      return {
        ...state,
        Dogs: [...action.payload],
      };
    case CREATE_DOG:
      return {
        ...state,
        Dogs: [action.payload, ...state.Dogs],
        origDogs: [action.payload, ...state.origDogs],
      };
    case FILTER_BY_TEMPERAMENT:
      return {
        ...state,
        Dogs: [...state.origDogs].filter((dogfil) =>
          dogfil.temperament
            ? dogfil.temperament.includes(action.payload)
            : null
        ),
      };
    case FETCH_TEMPERAMENTS_SUCCESS:
      return {
        ...state,
        temperament: action.payload,
        loading: false,
        error: null,
      };
    case ORDER_A_Z:
      return {
        ...state,
        Dogs: [...state.Dogs].sort((a, b) => {
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
      let orderWeight = [...state.Dogs];
      return {
        ...state,
        Dogs:
          action.payload === "WEIGHT"
            ? orderWeight.sort(
                (a, b) =>
                  Number(b.weight.split("-")[1]) -
                  a.weight.split("-")[1]
              )
            : orderWeight.sort(
                (a, b) =>
                  Number(a.weight.split("-")[1]) -
                  b.weight.split("-")[1]
              ),
      };
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
