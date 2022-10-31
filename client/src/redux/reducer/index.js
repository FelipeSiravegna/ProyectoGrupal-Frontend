import {
  GET_ALL_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE,
  GET_SORT_ASC,
  GET_SORT_POP,
  FILTER,

  PAGES,
  RESET,
  GET_ALL_GENRES

} from "../actions";

const initialState = {
  movies: [],
  detail: [],
  backvideos: [],
  page: 1,
  genre: []

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
        page: payload
        }


    default:
      return state;
  }
}
