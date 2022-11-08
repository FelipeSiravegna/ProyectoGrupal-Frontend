import axios from 'axios'
export const GET_ALL_MOVIES ='GET_ALL_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE ='ADD_MOVIE';
export const GET_SORT_ASC = 'GET_SORT_ASC';
export const GET_SORT_POP = 'GET_SORT_POP';
export const FILTER = 'FILTER';
export const RESET = 'RESET';
export const PAGES = 'PAGES';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const COMPARE_SELEC = 'COMPARE_SELEC';
export const SEARCH_COMPARE = 'SEARCH_COMPARE';
export const SEARCH_COMPARE2 = 'SEARCH_COMPARE2';
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
export const ADD_REVIEW = 'ADD_REVIEW';
export const DELETE_REVIEWS = 'GET_ALL_REVIEWS';
export const GET_LIKES_COUNT = 'GET_LIKES_COUNT';
export const ADD_LIKES = 'ADD_LIKES';


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
            console.log(err)
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


export const getAllGenres= ()=>{
    return async(dispatch)=>{
     let json = await axios.get('')
        dispatch = {
            type: GET_ALL_GENRES,
            payload: json.data
        }
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

export const filter = (payload) =>{
    return async(dispatch)=>{
        let json = await axios.get('')
        return dispatch = {
            type: FILTER,
            payload: json.data
        }
    }
}

export const pages=(page)=>{
    return async function (dispatch){
           // let result = await axios.get(`http://localhost:3001/movies/popular?page=${page}`);
            return dispatch({
                type: PAGES,
                payload: page
            })
        }
    }



export const reset= ()=>{
    return (dispatch)=>{
        return dispatch({
            type: RESET,
            
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
            let result = await axios.get(`http://localhost:3001/movies/search/?name=${name}&?offset=1`);
            return dispatch({
                type: SEARCH_COMPARE,
                payload: result.data
            })
    }
}

export const searchCompare2 = (name) => {
    return async function (dispatch){
            let result = await axios.get(`http://localhost:3001/movies/search/?name=${name}&?offset=1`);
            return dispatch({
                type: SEARCH_COMPARE2,
                payload: result.data
            })
    }
}
export const getAllReviews = () => {
    return async function (dispatch){
            let result = await axios.get(`http://localhost:3001/reviews`);
            return dispatch({
                type: GET_ALL_REVIEWS,
                payload: result.data
            })
    }
}
export const addReviews = (payload) => {
    
    console.log(payload)
    return async function (dispatch){
            await axios.post(`http://localhost:3001/reviews`, payload);
            return dispatch({
                type: ADD_REVIEW,
               
            })
    }
}
export const deleteReviews = (id) => {
    return async function (dispatch){
            await axios.delete(`http://localhost:3001/reviews/${id}`);
            return dispatch({
                type: DELETE_REVIEWS,          
            })
    }
}
export const getLikeCounts = () => {
    return async function (dispatch){
            let result = await axios.get(`http://localhost:3001/likes`);
            return dispatch({
                type: GET_LIKES_COUNT,
                payload: result.data
            })
    }
}
export const addLikes = () => {
    return async function (dispatch){
            await axios.get(`http://localhost:3001/likes`);
            return dispatch({
                type: ADD_LIKES,
        
            })
    }
}

