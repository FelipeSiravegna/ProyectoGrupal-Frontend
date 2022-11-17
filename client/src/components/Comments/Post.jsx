import React, { useEffect } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import Comments from './Comments';
import SendIcon from '@mui/icons-material/Send';
import "./Post.css";
import { getAllReviews, addReviews, getAllReviews2 } from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

function Post({ movieId, userId, userImg }) {

  const userDb = useSelector(state => state.user);
  const dispatch = useDispatch()
  const like = useSelector(state => state.like)
  const reviews = useSelector(state => state.reviews)
  const reviewsV2 = useSelector(state => state.reviewsV2);

  const [estado, setEstado] = useState('')



  useEffect(() => {
    dispatch(getAllReviews())
    dispatch(getAllReviews2())
  }, [dispatch, estado])


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addReviews({
      movieId: movieId,
      userId: userId,
      content: estado,
    })
    );
    setEstado("");
    // dispatch(getAllReviews());
  };


  let peli = reviews.filter(e => e.movie.id === movieId)
  let prueba = reviews.filter(a => a.userId === userId)


  let megusta = reviews.map(a => a.likes)   //like[0] ? like[0].like : null
  let otravez = megusta.map(a => a.map(e => e.userId))

  let element
  function hola() {
    for (let i = 0; i < otravez.length; i++) {
      if (i === userId) {
        element = [i];
        return element
      }
    }
  }

  let hola1 = hola()
  console.log(element, "HOLA")


  //otravez.filter(a=>a === userId)
  //console.log(megusta, "RESOLUCION")
  //console.log(otramas)

  const loggedUserReviews = reviewsV2.map(rev => {
    if (rev.userId === userDb.id) {
      return rev;
    }
  })

  if (userDb !== null) {

    return (
      <div className="post">
        <div className="post__header">

          <form className="post__form" onSubmit={handleSubmit} style={{ color: "#f44336" }} >
            <Avatar alt="Remy Sharp" src={userImg} className='avatar' sx={{ width: 56, height: 56 }} />
            <TextField
              label="add review..."
              className="post__input"
              placeholder="add review..."
              value={estado}
              onChange={e => setEstado(e.target.value)}

            />
            <Button
              variant="contained"
              size="small"
              endIcon={<SendIcon />}
              type="submit"
              style={{ color: "#f44336" }}
            >
              Send
            </Button>
          </form>


          <br></br>
          <br></br>
          <br></br>

          {peli.length ? peli.map(e => {
            return (<div className="post__comments">

              <Comments
                like={e.likes}
                content={e.content}
                name={e.user.username ? e.user.username : null}
                img={e.user.image}
                id={e.id}
                idUser={e.user.id}
                prueba={prueba}
                userid={userId}


              />

            </div>)
          }) : null}




        </div>
      </div>

    )
  }
}

export default Post;

