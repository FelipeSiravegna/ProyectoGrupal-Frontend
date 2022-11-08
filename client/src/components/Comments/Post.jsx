import React, { useEffect } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import Comments from './Comments';
import SendIcon from '@material-ui/icons/Send';
import "./Post.css";
import { getAllReviews, getLikeCounts, addLikes, addReviews, deleteReviews } from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

function Post({ movieId, userId }) {
    const dispatch = useDispatch()
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
    useEffect(() => { dispatch(getAllReviews()) }
        , [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        dispatch(addReviews({
            movieId: "41d6cb86-6865-40e7-b2ee-54cc9467fe99",
            userId: 1,
            content: e.target.value
        }))
    }

    return (
        <div className="post">
            <div className="post__header">

                {reviews?.map(e => {
                    return (
                        <div className="post__comments">
                            <Comments
                                content={e.content}
                                name={e.user.username}
                                img={e.user.image}
                                like={like}
                            />
                        </div>
                    )
                })}
                <form className="post__form" onSubmit={handleSubmit}>
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
                        type="submit"

                    >
                        Send
                    </Button>
                </form>

            </div>
        </div>
    )
}

export default Post