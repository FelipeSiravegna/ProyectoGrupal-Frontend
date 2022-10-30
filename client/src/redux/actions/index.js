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



export const getAllMovies= ()=>{
    return async function (dispatch) {
        await axios.get('http://localhost:3001/movies/popular/')
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

/*export const reset= ()=>{
    return (dispatch)=>{
        return dispatch({
            type: RESET,
            
        })
    }
}*/

export const pages=(payload)=>{
    return async(dispatch)=>{
        let json = await axios.get('')
        return dispatch({
            type: PAGES,
            payload
        })
    }


}

