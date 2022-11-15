import axios from 'axios'
export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE = 'ADD_MOVIE';
export const GET_SORT_ASC = 'GET_SORT_ASC';
export const GET_SORT_POP = 'GET_SORT_POP';
export const FILTER_GENRES = 'FILTER_GENRES';
export const RESET = 'RESET';
export const PAGES = 'PAGES';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
export const ADD_REVIEW = 'ADD_REVIEW';
export const DELETE_REVIEWS = 'DELETE_REVIEWS';
export const GET_LIKES_COUNT = 'GET_LIKES_COUNT';
export const ADD_LIKES = 'ADD_LIKES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const COMPARE_SELEC = 'COMPARE_SELEC'
export const SEARCH_COMPARE = 'SEARCH_COMPARE'
export const SEARCH_COMPARE2 = 'SEARCH_COMPARE2'
export const GET_MOVIES_SOON = 'GET_MOVIES_SOON'
export const ALL_GENRES = 'ALL_GENRES'
export const ALL_USERS = 'ALL_USERS'
export const FILTER_DIRECTOR = 'FILTER_DIRECTOR'
export const ALL_DIRECTOR = 'ALL_DIRECTOR'
export const USER_PREMIUM = 'USER_PREMIUM'
export const RESET_DETAIL = 'RESET_DETAIL'
export const ORDER_POPULARITY = 'ORDER_POPULARITY'
export const ORDER_RATING = 'ORDER_RATING'
export const GET_USER_INFO = 'GET_USER_INFO'
export const POST_USER_LOG = 'POST_USER_LOG'
export const CREATE_LIST ='CREATE_LIST'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
export const REMOVE_MOVIE_TO_LIST = 'REMOVE_MOVIE_TO_LIST'
export const GET_LIST = 'GET_LIST'
export const LIST_DETAILS = 'LIST_DETAILS'
export const RESET_SEARCH = 'RESET_SEARCH'
export const EDIT_LIST = 'EDIT_LIST'
export const ALL_ACTOR = 'ALL_ACTOR'
export const ACTIVE_USERS = 'ACTIVE_USERS'
export const BAN_USER = 'BAN_USER'
export const UNBAN_USER = 'UNBAN_USER'
export const AVAILABLE_USERS = 'AVAILABLE_USERS'
export const BANNED_USERS = 'BANNED_USERS'
export const PREMIUM_USERS = 'PREMIUM_USERS'
export const FREE_USERS = 'FREE_USERS'
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const DELETE_LIST = 'DELETE_LIST'
export const GET_OTHER_USER_INFO = 'GET_OTHER_USER_INFO';
export const UN_FOLLOW_LIST = 'UN_FOLLOW_LIST'
export const FOLLOW_LIST = 'FOLLOW_LIST'


//peliculas
export const getAllMovies = (name = 1) => {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/movies/rating?page=${name}&ord=DESC`)
            .then((pelis) => {
                dispatch({
                    type: GET_ALL_MOVIES,
                    payload: pelis.data
                })
                    // .catch((err) => {
                    //     console.log(err);
                    // });
            });
    };
}


export const getMovieDetail = (id) => {
    return async function (dispatch) {
        const detalle = await axios.get(`http://localhost:3001/detail/${id}`)
        dispatch({
            type: GET_MOVIE_DETAIL,
            payload: detalle.data
        })
    }
}


export const addMovie= (payload)=>{
    console.log(payload)
    return async(dispatch)=>{
        await axios.post('http://localhost:3001/createMovie', payload)
        return dispatch({
            type: ADD_MOVIE,
        })
    }
}

export const searchByName = (name) => {
    return async function (dispatch) {
        let result = await axios.get(`http://localhost:3001/movies/search/?name=${name}&page=1`);
        return dispatch({
            type: SEARCH_BY_NAME,
            payload: result.data
        })
    }

}

export const getComingSoon = () => {
    return async function (dispatch) {
        await axios.get(`/comingSoon`)
            .then((pelis) => {
                dispatch({
                    type: GET_MOVIES_SOON,
                    payload: pelis.data
                })
            })
            .catch((err) => {
            });

    };
};



//filtros

export const orderRating = (filtro) => {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:3001/movies/rating/?page=1&ord=${filtro}`)
        return dispatch({
            type: ORDER_RATING,
            payload: json.data
        })
    }
}


export const orderPopularity = (filtro) => {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:3001/movies/popular/?page=1&ord=${filtro}`)
        return dispatch({
            type: ORDER_POPULARITY,
            payload: json.data
        })
    }
}




export const sortPopularity = (payload) => {
    return async (dispatch) => {
        let json = await axios.get('')
        return dispatch = {
            type: GET_SORT_POP,
            payload: json.data
        }
    }
}

export const filterGenres = (filtro) => {
    return async function (dispatch) {
        let json = await axios.get(`/movies/search?genres[]=${filtro}`)
        return dispatch({
            type: FILTER_GENRES,
            payload: json.data
        })
    }
}




export const allGenres = () => {
    return async function (dispatch) {
        let result = await axios.get(`http://localhost:3001/genres`);
        return dispatch({
            type: ALL_GENRES,
            payload: result.data
        })
    }
}


export const filterDirector = (filtro) => {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:3001/movies/search?director[]=${filtro}`)
        return dispatch({
            type: FILTER_DIRECTOR,
            payload: json.data
        })
    }
}
export const get4Search= (envio)=>{
    return async function (dispatch) {
    try{
    console.log("soy el envio:",envio)
    let routes = `http://localhost:3001/movies/search?`
    console.log("routes1",routes)
    if (envio.genres!=="null") {routes=routes+`genres[]=`+envio.genres+"&"}
    if (envio.director!=="null") {routes=routes+`director[]=`+envio.director+"&"}
    if (envio.popularity!=="null") {routes=routes+`popularity=`+envio.popularity+`&`}
    if (envio.rating!=="null") {routes=routes+`rating=`+envio.rating+`&`}
    console.log("routes:",routes)
    let json = await axios.get(routes)
    console.log(json.data)
    return dispatch({
        type: FILTER_DIRECTOR,
        payload: json.data
    })}
    catch(error){
        console.log(error)
    }}
}


export const allDirector = () => {
    return async function (dispatch) {
        let result = await axios.get(`http://localhost:3001/directors`);
        return dispatch({
            type: ALL_DIRECTOR,
            payload: result.data
        })
    }
}

export const allActor= ()=>{
    return async function (dispatch){
        let result = await axios.get(`http://localhost:3001/actors`);
        return dispatch({
            type: ALL_ACTOR,
            payload:result.data
        })
    }

}
//paginado

export const pages = (page) => {
    return async function (dispatch) {
        return dispatch({
            type: PAGES,
            payload: page
        })
    }
}


//Compare
export const compareSelec = () => {
    return async function (dispatch) {
        let result = await axios.get(`/movies/all`);
        return dispatch({
            type: COMPARE_SELEC,
            payload: result.data
        })
    }
}

export const searchCompare = (name) => {
    return async function (dispatch) {
        let result = await axios.get(`/movies/search/?name=${name}&offset=true`);
        return dispatch({
            type: SEARCH_COMPARE,
            payload: result.data
        })
    }
}

export const searchCompare2 = (name) => {

    return async function (dispatch) {
        let result = await axios.get(`http://localhost:3001/movies/search/?name=${name}&offset=true`);
        return dispatch({
            type: SEARCH_COMPARE2,
            payload: result.data
        })
    }
}
export const getAllReviews = () => {
    return async function (dispatch) {
        let result = await axios.get(`http://localhost:3001/reviews`);
        return dispatch({
            type: GET_ALL_REVIEWS,
            payload: result.data
        })
    }
}
export const addReviews = (payload) => {
    return async function (dispatch) {
        await axios.post(`http://localhost:3001/reviews`, payload);
        return dispatch({
            type: ADD_REVIEW,
        })
    }
}
export const deleteReviews = (id) => {
    return async function (dispatch) {
        await axios.delete(`http://localhost:3001/reviews/${id}`);
        return dispatch({
            type: DELETE_REVIEWS,
        })
    }
}
export const getLikeCounts = () => {
    return async function (dispatch) {
        let result = await axios.get(`http://localhost:3001/likes`);
        return dispatch({
            type: GET_LIKES_COUNT,
            payload: result.data
        })
    }
}
export const addLikes = (payload) => {
    return async function (dispatch) {
        await axios.post(`http://localhost:3001/likes`, payload);
        return dispatch({
            type: ADD_LIKES,
        })
    }
}


//admin
export const allUsers = () => {
    return async function (dispatch) {
        let result = await axios.get(`/allusers`);
        return dispatch({
            type: ALL_USERS,
            payload: result.data
        })

    }
}


export const UserPremium = (email) => {
    return async function (dispatch) {
        let result = await axios.get(`http://localhost:3001/premium/?email=${email}`);
        return dispatch({
            type: USER_PREMIUM,
            payload: result.data
        })
    }
}

export const resetDetail = () => {
    return (dispatch) => {
        dispatch({
            type: "RESET_DETAIL"
        });
    }
}

export const userCreate = (form) => {
    return async function () {
        try {

            let response = await axios.post('http://localhost:3001/user', form)
            return response

        } catch (error) {
            console.log(error)
        }


    }
}


//body should be identificator: pass:
export const checkUserInfo = (body) => {
    return async function (dispatch) {
        //console.log('body:',body)
        try {
            let json = await axios.post('http://localhost:3001/login', body)
            await localStorage.setItem("token", `${json.data.token}`)
            return dispatch({
                type: POST_USER_LOG,
                payload: json.data.token
            })
        } catch (error) {
            console.log(error.message)
            return
        }
    }
}


export const getUserInfo = () => {
    return async function (dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/users/user/`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            if (json.data) {
                localStorage.setItem("username", `${json.data.username.replace("585", " ")}`)
                localStorage.setItem("email", `${json.data.email}`)
                localStorage.setItem("image", `${json.data.image}`)
                localStorage.setItem("id", `${json.data.id}`)
            }
            return dispatch({
                type: GET_USER_INFO,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const subscribe = () => {
    return async function (dispatch) {
        const email = { email: localStorage.getItem("email") }
        const response = await axios.post(`http://localhost:3001/subscribe`, email)
        if (response.data) {
            return window.open(response.data.init_point, '_blank')
        }
    }
}


export const handleLoginExternal = (info) => {
    return async function () {
        const body = { identificator: info.email, pass: info.password }
        try {
            let TryRegister = await axios.post('http://localhost:3001/user', info)
            if (TryRegister.status == 200) {
                let json = await axios.post('http://localhost:3001/login', body)
                localStorage.setItem("token", `${json.data.token}`)
                return
            }
        } catch (error) {
            if (error.response.data.status == 403) {
                let json = await axios.post('http://localhost:3001/login', body)
                localStorage.setItem("token", `${json.data.token}`)
                return
            }
        }
}}




// LIST // LIST // LIST // LIST // LIST // LIST // LIST // LIST // LIST

export const createList = (id, payload) => {
    return async function (dispatch){
        let hola = await axios.post(`http://localhost:3001/lists/list/${id}`, payload);
            return dispatch({
                type: CREATE_LIST,
            })
    }
}


export const addMovieToList= (listId, movieId ) => {
    return async function (dispatch){
        await axios.put(`http://localhost:3001/lists/list/${listId}?add=true&movieId=${movieId}`);
            return dispatch({
                type: ADD_MOVIE_TO_LIST,
            })
    }
}

export const removeMovieToList= (listId, movieId ) => {
    return async function (dispatch){
        await axios.put(`http://localhost:3001/lists/list/${listId}?remove=true&movieId=${movieId}`);
            return dispatch({
                type: REMOVE_MOVIE_TO_LIST,
            })
    }
}


export const getList = (listId)=>{
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/lists`)
        .then((pelis) => {
            dispatch ({
                type: GET_LIST,
                payload: pelis.data
            })
        })
        .catch((err) => {
            console.log(err);
        });
    };
};



export const listDetails = (listId)=>{
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/lists/list/${listId}`)
        .then((pelis) => {
            dispatch ({
                type: LIST_DETAILS,
                payload: pelis.data
            })
        })
        .catch((err) => {
            console.log(err);
        });
    };
};

export const editList= (listId, body) => {
    return async function (dispatch){
        await axios.put(`http://localhost:3001/lists/list/${listId}/update`, body);
            return dispatch({
                type: EDIT_LIST,
            })
    }
}

export const deleteList= (listId) => {
    return async function (dispatch){
        await axios.put(`http://localhost:3001/lists/manageDeletion/${listId}?action=delete`);
            return dispatch({
                type: DELETE_LIST,
            })
    }
}

export const followList = (id, listId) => {
    return async function (dispatch){
        let hola = await axios.post(`http://localhost:3001/lists/list/${id}?list=${listId}&action=follow`);
            return dispatch({
                type: FOLLOW_LIST
            })
    }
}

export const unFollowList = (id, listId) => {
    return async function (dispatch){
        let hola = await axios.post(`http://localhost:3001/lists/list/${id}?list=${listId}&action=unfollow`);
            return dispatch({
                type: UN_FOLLOW_LIST
            })
    }
}


export const resetSearch = () => {
    return(dispatch) => {
        dispatch({
            type: RESET_SEARCH
        });
    }
}

export const followUser = (loggedUserId, followedUserId) => {
    return async function(){
        const body = {loggedUserId, followedUserId};
        const response = await axios.put(`/followUnfollow/follow`, body);
    }
}

export const unfollowUser = (loggedUserId, unfollowedUserId) => {
    return async function(){
        const body = {loggedUserId, unfollowedUserId};
        const response = await axios.put(`/followUnfollow/unfollow`, body);
    }
}
    
export const putUser = (id,changes) =>{
    return async function (){
        try {

            const response = await axios.put('http://localhost:3001/user/' + id,changes)
            return response
            
        } catch (error) {
            console.log(error)
        }
}

    
}

export const activeUsers = () => {
    return async function (dispatch) {
        let result = await axios.get(`/activeUsers`);
        return dispatch({
            type: ACTIVE_USERS,
            payload: result.data
        })

    }
}

export const availableUsers = () => {
    return async function (dispatch) {
        try {
            let result = await axios.get(`/availableUsers`);
            console.log(result)
            return dispatch({
                type: AVAILABLE_USERS,
                payload: result.data
            })
        } catch (error) {
            if (error){
                return dispatch({
                    type: AVAILABLE_USERS,
                    payload: []
                })
            }
        }

    }
}

export const banUser = (j) => {
    return async function (dispatch) {
        let result = await axios.put(`/user/?action=bann&data=${j.id}`);
        return dispatch({
            type: BAN_USER,
            payload: result.data
        })

    }
}

export const bannedUsers = () => {
    return async function (dispatch) {
        try {
            let result = await axios.get(`/bannedUsers`);
            console.log(result)
            return dispatch({
                type: BANNED_USERS,
                payload: result.data
            })
        } catch (error) {
            console.log(error)
            if (error){
                return dispatch({
                    type: BANNED_USERS,
                    payload: []
                })
            }
        }

    }
}
export const unBanUser = (j) => {
    return async function (dispatch) {
        let result = await axios.put(`/user/?action=Unbann&data=${j.id}`);
        return dispatch({
            type: UNBAN_USER,
            payload: result.data
        })

    }
}

export const premiumUsers = () => {
    return async function (dispatch) {
        try {
            let result = await axios.get(`/premiumUsers`);
            return dispatch({
                type: PREMIUM_USERS,
                payload: result.data
            })
        } catch (error) {
            if (error){
                return dispatch({
                    type: PREMIUM_USERS,
                    payload: []
                })
            }
        }

    }
}
export const freeUsers = () => {
    return async function (dispatch) {
        try {
            let result = await axios.get(`/freeUsers`);
            return dispatch({
                type: FREE_USERS,
                payload: result.data
            })
        } catch (error) {
            if (error){
                return dispatch({
                    type: FREE_USERS,
                    payload: []
                })
            }
        }

    }
}

export const getActivity = (loggedUser) => {
    return async function(dispatch){
        try{
            let activity = await axios.get(`/activity/${loggedUser}`);
            return dispatch({
                type: GET_ACTIVITY,
                payload: activity.data
            })
        } catch(error){
            console.log(error);
        }
    }
}

export const getOtherUserInfo = (id) => {
    return async function(dispatch){
        try{
            let info = await axios.get(`/users/user/${id}`);
            return dispatch({
                type: GET_OTHER_USER_INFO,
                payload: info.data
            })
        } catch(error){
            console.log(error);
        }
    }
}