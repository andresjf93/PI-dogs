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
} from "./actionTypes";


const initialState = {
  origDogs: [],
  apiDogs: [],
  dbDogs: [],
  Dogs: [],
  Search: [],
  numPage: 1,
  temperament: [],
  loading: false,
  error: null,
};

const allDogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        origDogs: [...action.payload],
        Dogs: [...action.payload],
        apiDogs: [...action.payload],
        
      };

    case SEARCH_DOGS:
      return {
        ...state,
        Dogs: action.payload,
      };
      case APIDOGS: 
      return{
        ...state,
        Dogs: [...state.apiDogs],
      }
  case DBDOGS:
  return {
    ...state,
    Dogs:[...state.dbDogs],
  }
    case CREATE_DOG:
      return {
        ...state,
        Dogs: [action.payload, ...state.Dogs],
        dbDogs: [...state.dbDogs, action.payload],
        origDogs:[ ...state.origDogs, action.payload],
      };
    case FILTER_BY_TEMPERAMENT:
      return {
        ...state,
        Dogs: [...state.origDogs].filter((dogfil) =>
          dogfil.temperament
            ? dogfil.temperament.includes(action.payload)
            : false
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
        Dogs: [...state.Dogs].sort((a, b) =>
          action.payload === "A"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        ),
      };
    case SET_ORDER_WEIGHT:
      return {
        ...state,
        Dogs: [...state.Dogs].sort((a, b) =>
          action.payload === "WEIGHT"
            ? Number(b.weight.split("-")[1]) - Number(a.weight.split("-")[1])
            : Number(a.weight.split("-")[1]) - Number(b.weight.split("-")[1])
        ),
      };
    case PREV:
      return {
        ...state,
        numPage: Math.max(state.numPage - 1, 1),
      };
    case NEXT:
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    case RESET_FILTERS:
      return {
        ...state,
        Dogs: [ ...state.origDogs],
        numPage: 1,
      };
    default:    

      return state;
  }
};

export default allDogsReducer;
