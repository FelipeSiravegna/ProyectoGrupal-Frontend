import React from 'react';
import Button from '@mui/material/Button'
import './Review.css'
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';




export default function Review(){

const [comment, setComment] = useState('')
const [comments, setComments] = useState([])
const [error, setError] = useState('')

function onChange(e) {
setComment(e.target.value)
}

function onClick() {
    setComments((comments) => [...comments, comment])
    }

    return(
        <React.Fragment>
      <CssBaseline> 
      <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <div className='main-container'>
            <div className='comment-flexbox'>
            <h3 className='comment-text'>Comment</h3>
            <textarea className='input-box' value={comment} onChange={onChange} placeholder='leave a review of the movie...'/>
            <Button variant="contained" className='comment-button' color="rojo" onClick={onClick} size='small'>submit</Button>
            {comments.map(text => (
                <div className='comment-container'>{text}</div>
            ))}
            </div>
        </div>
        </Box>
      </Container>
      </CssBaseline>
    </React.Fragment>
    )
}
