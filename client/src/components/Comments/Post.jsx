import React, { useEffect } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import Comments from './Comments';
import SendIcon from '@mui/icons-material/Send';
import "./Post.css";
import {getAllReviews, getLikeCounts, addLikes, addReviews, deleteReviews} from '../../redux/actions/index'
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';


function Post({movieId, userId, userName, userImg}) {


const dispatch=useDispatch()
const like = useSelector(state => state.like)
const reviews = useSelector(state => state.reviews)

const [estado, setEstado] = useState('')



useEffect(()=> 
{dispatch(getAllReviews())}
, [dispatch])



const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addReviews({
        movieId: movieId,
        userId: 1,
        content: estado
    }))
}


//const peli = reviews.filter(a => a.movie.id === movieId)

console.log(reviews)


    return (
        <div className="post">
            <div className="post__header">
          
                <form className="post__form" onSubmit={handleSubmit} >
                    <TextField
                        label="add comment"
                        size="small"
                        variant="outlined"
                        className="post__input"
                        placeholder="add comment" 
                        value={estado} 
                        onChange={e => setEstado(e.target.value)}
                        />
                    <Button
                        variant="contained"
                        size="small"
                        endIcon={<SendIcon />}
                        type="submit"
                        >
                        Send
                    </Button>
                </form>
     
            
                {reviews.length ?reviews.map(e=>{ 
                return (<div className="post__comments">
                    <Comments 
                    like={like}
                    content={e.content}
                    name={e.user.username}
                    img={e.user.image}
                    />
                </div>)
            }): null}

                

</div>
        </div>
    )
}

export default Post