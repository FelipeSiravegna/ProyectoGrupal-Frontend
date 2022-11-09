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
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
export const ADD_REVIEW = 'ADD_REVIEW';
export const DELETE_REVIEWS = 'GET_ALL_REVIEWS';
export const GET_LIKES_COUNT = 'GET_LIKES_COUNT';
export const ADD_LIKES = 'ADD_LIKES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const COMPARE_SELEC = 'COMPARE_SELEC'
export const SEARCH_COMPARE = 'SEARCH_COMPARE'
export const SEARCH_COMPARE2 = 'SEARCH_COMPARE2'
export const GET_MOVIES_SOON = 'GET_MOVIES_SOON'
export const ALL_GENRES = 'ALL_GENRES'
export const ALL_USERS  =  'ALL_USERS'
export const FILTER_DIRECTOR = 'FILTER_DIRECTOR'
export const ALL_DIRECTOR ='ALL_DIRECTOR'
export const USER_PREMIUM = 'USER_PREMIUM'
export const RESET_DETAIL = 'RESET_DETAIL'
export const ORDER_POPULARITY = 'ORDER_POPULARITY'
export const ORDER_RATING = 'ORDER_RATING'
export const GET_USER_INFO = 'GET_USER_INFO'
export const POST_USER_LOG = 'POST_USER_LOG'


//peliculas
export const getAllMovies= (name = 1)=>{
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/movies/rating?page=${name}&ord=DESC`)
        .then((pelis) => {
            dispatch ({
                type: GET_ALL_MOVIES,
                payload: pelis.data
            })
        })
        .catch((err) => {
            console.log(err);
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

    export const searchByName = (name) => {
        return async function (dispatch){
                let result = await axios.get(`http://localhost:3001/movies/search/?name=${name}&page=1`);
                return dispatch({
                    type: SEARCH_BY_NAME,
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
    


//filtros

export const orderRating = (filtro) =>{
    return async function (dispatch){
        let json = await axios.get(`http://localhost:3001/movies/rating/?page=1&ord=${filtro}`)
        return dispatch({
            type: ORDER_RATING,
            payload: json.data
        })
    }
}

export const orderPopularity = (filtro) =>{
    return async function (dispatch){
        let json = await axios.get(`http://localhost:3001/movies/popular/?page=1&ord=${filtro}`)
        return dispatch({
            type: ORDER_POPULARITY,
            payload: json.data
        })
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



export const allGenres= ()=>{
    return async function (dispatch){
        let result = await axios.get(`http://localhost:3001/genres`);
        return dispatch({
            type: ALL_GENRES,
            payload:result.data
        })
    }

}


export const filterDirector = (filtro) =>{
    return async function (dispatch){
        let json = await axios.get(`http://localhost:3001/movies/search?director[]=${filtro}`)
        return dispatch({
            type: FILTER_DIRECTOR,
            payload: json.data
        })
    }
}


export const allDirector= ()=>{
    return async function (dispatch){
        let result = await axios.get(`http://localhost:3001/directors`);
        return dispatch({
            type: ALL_DIRECTOR,
            payload:result.data
        })
    }

}



//paginado
export const pages=(page)=>{
    return async function (dispatch){
            return dispatch({
                type: PAGES,
                payload: page
            })
        }
    }





//Compare
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
export const getAllReviews = (id) => {
    return async function (dispatch){
            let result = await axios.get(`http://localhost:3001/reviews?id=${id}`);
            return dispatch({
                type: GET_ALL_REVIEWS,
                payload: result.data
            })
    }
}
export const addReviews = (payload) => {
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


//admin

export const allUsers= ()=>{
    return async function (dispatch){
        let result = await axios.get(`http://localhost:3001/allusers`);
        return dispatch({
            type: ALL_USERS,
            payload:result.data
        })

    }
}

export const UserPremium= (email)=>{
    return async function (dispatch){
        let result = await axios.get(`http://localhost:3001/premium/?email=${email}`);
        return dispatch({
            type: USER_PREMIUM,
            payload:result.data
        })
    }
}




export const resetDetail = () => {
    return(dispatch) => {
        dispatch({
            type: "RESET_DETAIL"
        });
    }
}

export const userCreate = (form) =>{
    return async function (){
        try {

            let response = await axios.post('http://localhost:3001/user' , form)
            return response

        } catch (error) {
            console.log(error)
        }


    }
}


//body should be identificator: pass:
export const checkUserInfo = (body) =>{
    return async function (dispatch){
        //console.log('body:',body)
        try {
            let json = await axios.post('http://localhost:3001/login',body)
            console.log('json:',json.data.token)
            return dispatch({
                type: POST_USER_LOG,
                payload: json.data.token})
        } catch (error) {
            console.log(error.message)
        }
    }
}


export const getUserInfo = (token) =>{
    return async function (dispatch){
        console.log(token)
        try {
            let json = await axios.get(`http://localhost:3001/users/user/`,{headers:{Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJ1c2VybmFtZSI6IlVzdWFyaW8xIiwiaWQiOjF9XSwiaWF0IjoxNjY3NzcyMzYzfQ.CCuGwleGitvDJ-sKGWOAopH1MzBmeF6PYg_yPi9wyWk'}})
            
            console.log('json:',json.data)
            return dispatch({
                type: GET_USER_INFO,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}