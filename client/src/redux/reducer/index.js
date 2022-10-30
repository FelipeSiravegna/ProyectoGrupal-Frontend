import {
  GET_ALL_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE,
  GET_SORT,
  FILTER,
  RESET,
  PAGES,
  
} from "../actions";

const initialState = {
  movies: [],
  detail: {},
  sortMovies: [],
  filterMovie: [],
  page: [],
};


export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: payload,
        page: payload
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
    case FILTER:
      return {
        ...state,
      };
      case RESET:
        return {
          ...state,
          movies: state.backvideos,
        };
        case PAGES:
          console.log(movies)
          return{
          ...state,
          movies: payload
        }
    default:
      return state;
  }
}
