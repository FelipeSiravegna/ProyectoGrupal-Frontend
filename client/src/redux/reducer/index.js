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
  GET_ALL_REVIEWS,
  ADD_REVIEW,
  DELETE_REVIEWS,
  GET_LIKES_COUNT,
  ADD_LIKES,
  GET_MOVIES_SOON,
  FILTER_GENRES,
  ALL_GENRES,
  ALL_USERS,
  ALL_DIRECTOR,
  FILTER_DIRECTOR,
  USER_PREMIUM,
  RESET_DETAIL,
  ORDER_POPULARITY,
  ORDER_RATING,
  POST_USER_LOG,
  GET_USER_INFO,
  ALL_ACTOR,
  ACTIVE_USERS,
  AVAILABLE_USERS,
  BANNED_USERS,
  PREMIUM_USERS,
  FREE_USERS
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
  reviews: [],
  like: [],
  moviesSoon: [],
  genres: [],
  users: [],
  directors: [],
  actors: [],
  idToken:"",
  user:[],
  items:[]
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
        genres: payload

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

          case GET_ALL_REVIEWS:
          return {
            ...state,
            reviews: payload
          };
          case ADD_REVIEW:
      return {
        ...state,
      };
      case DELETE_REVIEWS:
        return {
          ...state,
        };
      case ADD_LIKES:
        return {
          ...state,
        };
      case GET_LIKES_COUNT:
        return {
          ...state,
          like: payload
        };
          case GET_MOVIES_SOON:
      return {
        ...state,
        moviesSoon: payload
      };

      case ALL_USERS:
      return {
        ...state,
        users: payload,
        items:payload
      };
      case ALL_DIRECTOR:
      return {
        ...state,
        directors: payload
      };

      case ALL_ACTOR:
      return {
        ...state,
        actors: payload
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
      case ORDER_RATING:
      return {
        ...state,
        movies: payload
      };
      case POST_USER_LOG:
      return {
        ...state,
        idToken:payload
      }
      case GET_USER_INFO:
      return {
        ...state,
        user:payload
      }
      case ALL_USERS:
      return {
        ...state,
        items:payload
      };
      case ACTIVE_USERS:
      return {
        ...state,
        items:payload
      };
      case AVAILABLE_USERS:
      return {
        ...state,
        items:payload
      };
      case BANNED_USERS:
      return {
        ...state,
        items:payload
      };
      case PREMIUM_USERS:
      return {
        ...state,
        items:payload
      };
      case FREE_USERS:
      return {
        ...state,
        items:payload
      };

    default:
      return state;
  }
}
AVAILABLE_USERS
