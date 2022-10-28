import axios from 'axios'
export const GET_ALL_MOVIES ='GET_ALL_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE ='ADD_MOVIE';
export const GET_SORT = 'GET_SORT';
export const FILTER = 'FILTER';



export const getAllMovies= ()=>{
    return async(dispatch)=>{
     let json = await axios.get('')
        dispatch = {
            type: GET_ALL_MOVIES,
            payload: json.data
        }
    }   
}

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
            type: GET_SORT,
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
