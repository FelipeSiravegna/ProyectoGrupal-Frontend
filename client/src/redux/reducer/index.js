import {
  GET_ALL_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE,
  GET_SORT_ASC,
  GET_SORT_POP,
  FILTER,
  SEARCH_BY_NAME,
  PAGES,
  RESET,
  GET_ALL_GENRES,
  COMPARE_SELEC,
  SEARCH_COMPARE2,
  SEARCH_COMPARE,
  GET_MOVIES_SOON,
  FILTER_GENRES,
  ALL_GENRES,
  ALL_USERS,
  ALL_DIRECTOR,
  FILTER_DIRECTOR,
  USER_PREMIUM,
  RESET_DETAIL,
  ORDER_POPULARITY,
} from "../actions";

const initialState = {
  movies: [],
  detail: [],
  backvideos: [],
  page: 1,
  genre: [],
  compare: [],
  busqueda1: [],
  busqueda2: [],
  moviesSoon: [],
  genres: [],
  users: [],
  directors: []
};



export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: payload,
        backvideos: payload,
      };
    case GET_ALL_GENRES:
      return {
        ...state,
        genre: payload

      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        detail: payload,
        
      };
    case ADD_MOVIE:
      return {
        ...state,
      };
    case GET_SORT_ASC:
      return {
        ...state,
        movies: payload,
      };
    case GET_SORT_POP:
      return {
        ...state,
        movies: payload,
      };
    case FILTER_GENRES:
      return {
        ...state,
        movies: payload
      };
      case ALL_GENRES:
      return {
        ...state,
        genres: payload
      };

    case RESET:
      return {
        ...state,
        games: state.backvideos,
      };
      case PAGES:
        return{
        ...state,
        page: payload
        };
        case SEARCH_BY_NAME:
          return {
            ...state,
            movies: payload
          };
          case COMPARE_SELEC:
          return {
            ...state,
            compare: payload
          };
          case SEARCH_COMPARE:
          return {
            ...state,
            busqueda1: payload
          };
          case SEARCH_COMPARE2:
          return {
            ...state,
            busqueda2: payload
          };
          case GET_MOVIES_SOON:
      return {
        ...state,
        moviesSoon: payload
      };

      case ALL_USERS:
      return {
        ...state,
        users: payload
      };
      case ALL_DIRECTOR:
      return {
        ...state,
        directors: payload
      };
      case FILTER_DIRECTOR:
      return {
        ...state,
        movies: payload
      };
      case USER_PREMIUM:
      return {
        ...state,
      };
      case RESET_DETAIL:
          return{
            ...state,
            detail: []
          };
          case ORDER_POPULARITY:
      return {
        ...state,
        movies: payload
      };
    default:
      return state;
  }
}

