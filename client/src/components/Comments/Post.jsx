import React, { useEffect } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import Comments from './Comments';
import SendIcon from '@mui/icons-material/Send';
import "./Post.css";
import {getAllReviews, addReviews, } from '../../redux/actions/index'
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';


function Post({movieId, userId}) {


const dispatch=useDispatch()
const like = useSelector(state => state.like)
const reviews = useSelector(state => state.reviews)

const [estado, setEstado] = useState('')



useEffect(()=> 
{dispatch(getAllReviews())}
, [dispatch, estado])



const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addReviews({
        movieId: movieId,
        userId: userId,
        content: estado,
      })
    );
    setEstado("");
    dispatch(getAllReviews());
  };


  let peli = reviews.filter(e=> e.movie.id ===movieId)
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
     
            

                {peli.length? peli.map(e=>{ 
                return (<div className="post__comments">
                    <Comments 
                    like={e.like}
                    content={e.content}
                    name={e.user.username ? e.user.username : null}
                    img={e.user.image}
                    id={e.id}
                    idUser={e.user.id}
                    />
                </div>)
            }): null}


                

</div>
        </div>

  )
}

export default Post;

