import React, { useEffect } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import Comments from './Comments';
import SendIcon from '@material-ui/icons/Send';
import "./Post.css";
import {getAllReviews, getLikeCounts, addLikes, addReviews, deleteReviews} from '../../redux/actions/index'
import {useSelector, useDispatch} from 'react-redux'

function Post(movieId, userId) {
const dispatch=useDispatch()
const like = useSelector(state => state.like)
const reviews = useSelector(state => state.reviews)

console.log(reviews)
// const rev=reviews.map(e=>{
//     return(
//         user: e.name,
//         content: content,
//         image: e.image
//     )
// })
useEffect(()=> 
{dispatch(getAllReviews())}
, [dispatch])

const handleSubmit=(e)=>{
    dispatch(addReviews({
        movieId,
        userId,
        content: e.target.values
    }))
}

    return (
        <div className="post">
            <div className="post__header">
          
            {reviews?.map(e=>{ 
                return (<div className="post__comments">
                    <Comments 
                    like={like}
                    />
                </div>)
})}
                <form className="post__form"  onSubmit={handleSubmit}>
                    <TextField
                        label="add comment"
                        size="small"
                        variant="outlined"
                        className="post__input"
                        placeholder="add comment"
                    />
                    <Button
                        variant="contained"
                        size="small"
                        endIcon={<SendIcon />}
                       
                    >
                        Send
                    </Button>
                </form>
     
            </div>
        </div>
    )
}

export default Post