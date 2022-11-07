import axios from 'axios'
export const GET_ALL_MOVIES ='GET_ALL_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE ='ADD_MOVIE';
export const GET_SORT_ASC = 'GET_SORT_ASC';
export const GET_SORT_POP = 'GET_SORT_POP';
export const FILTER_GENRES = 'FILTER_GENRES';
export const RESET = 'RESET';
export const PAGES = 'PAGES';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const COMPARE_SELEC = 'COMPARE_SELEC'
export const SEARCH_COMPARE = 'SEARCH_COMPARE'
export const SEARCH_COMPARE2 = 'SEARCH_COMPARE2'
export const GET_MOVIES_SOON = 'GET_MOVIES_SOON'
export const ALL_GENRES = 'ALL_GENRES'
export const RESET_DETAIL = 'RESET_DETAIL'



export const getAllMovies= (name = 0)=>{
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/movies/popular?page=${name}`)
        .then((pelis) => {
            dispatch ({
                type: GET_ALL_MOVIES,
                payload: pelis.data
            })
        })
        .catch((err) => {
        });
    };
  };

export const getMovieDetail= (id)=>{
        return async function(dispatch) {
            const detalle = await axios.get(`http://localhost:3001/detail/${id}`)
                dispatch ({
                    type: GET_MOVIE_DETAIL,
                    payload: detalle.data
                })
        }
    }


export const addMovie= (payload)=>{
    return async(dispatch)=>{
        let json = await axios.post('')
           return json
        }
    }
export const sortAsc = (payload) =>{
    return async(dispatch)=>{
        let json = await axios.get('')
        return dispatch = {
            type: GET_SORT_ASC,
            payload: json.data
        }
    }
}

export const sortPopularity = (payload) =>{
    return async(dispatch)=>{
        let json = await axios.get('')
        return dispatch = {
            type: GET_SORT_POP,
            payload: json.data
        }
    }
}

export const filterGenres = (filtro) =>{
    return async function (dispatch){
        let json = await axios.get(`http://localhost:3001/movies/search?genres[]=${filtro}`)
        return dispatch({
            type: FILTER_GENRES,
            payload: json.data
        })
    }
}



export const pages=(page)=>{
    return async function (dispatch){
            return dispatch({
                type: PAGES,
                payload: page
            })
        }
    }



export const allGenres= ()=>{
    return async function (dispatch){
        let result = await axios.get(`http://localhost:3001/genres`);
        return dispatch({
            type: ALL_GENRES,
            payload:result.data
        })
    }

}


export const searchByName = (name) => {
    return async function (dispatch){
            let result = await axios.get(`http://localhost:3001/movies/search/?name=${name}&page=1`);
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: result.data
            })
    }
}


export const compareSelec = () => {
    return async function (dispatch){
            let result = await axios.get(`http://localhost:3001/movies/all`);
            return dispatch({
                type: COMPARE_SELEC,
                payload: result.data
            })
    }
}

export const searchCompare = (name) => {
    return async function (dispatch){
            let result = await axios.get(`http://localhost:3001/movies/search/?name=${name}&offset=true`);
            return dispatch({
                type: SEARCH_COMPARE,
                payload: result.data
            })
    }
}

export const searchCompare2 = (name) => {
    return async function (dispatch){
            let result = await axios.get(`http://localhost:3001/movies/search/?name=${name}&offset=true`);
            return dispatch({
                type: SEARCH_COMPARE2,
                payload: result.data
            })
    }
}

export const getComingSoon=()=>{
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/comingSoon`)
        .then((pelis) => {
            dispatch ({
                type: GET_MOVIES_SOON,
                payload: pelis.data
            })
        })
        .catch((err) => {
        });
    };
  };

export const resetDetail = () => {
    return(dispatch) => {
        dispatch({
            type: "RESET_DETAIL"
        });
    }
}