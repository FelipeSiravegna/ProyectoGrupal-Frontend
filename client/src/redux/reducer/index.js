import {
  GET_ALL_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE,
  GET_SORT,
  FILTER,
} from "../actions";

const initialState = {
  movies: [],
  detail: {},
  sortMovies: [],
  filterMovie: [],
};


export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case GET_MOVIE_DETAIL:
      console.log(detail)
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
          games: state.backvideos,
        };
        case PAGES:
          return{
          ...state,
          page: action.payload
          }
    default:
      return state;
  }
}
