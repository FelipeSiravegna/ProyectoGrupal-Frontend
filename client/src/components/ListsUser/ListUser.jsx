import React from 'react'
import './ListUser.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getList } from '../../redux/actions'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import CreateList from './CreateList'
import EditList from './EditList'

const ListUser = () => {

  const dispatch = useDispatch()

  const listas = useSelector(state => (state.list))
  let usuario = listas.filter(a => `${a.userId}` === localStorage.id)


  const [smShow, setSmShow] = useState(false);

  useEffect(() => {
    dispatch(getList())
  }, [])
  return (
    <div>
      <div className='botonCreador'>
        <CreateList />
      </div>
      <div className='listortis'>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            {usuario ? usuario.map(a => {
              return (
                <ListGroup as="ol">
                  <br></br>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    id="Ey">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold"><j className='rei'>{a.name}</j></div>
                      <p className='desclist'>{a.description}</p>
                    </div>
                    <h className='costado'>
                      <Badge bg="danger" pill>
                        {a.movies? a.movies.length : 0} movies
                      </Badge>
                      <div className='botonEditor'>
                        <EditList id={a.id} />
                      </div>
                      <Link className='gg' to={`/list/${a.id}`}>
                        <Badge bg="none">
                          <Button>
                            <RemoveRedEyeIcon />
                          </Button>
                        </Badge>
                      </Link>
                    </h>
                  </ListGroup.Item>
                </ListGroup>
              )
            }) : <p>hola</p>}
          </Container>
        </React.Fragment>
      </div>
    </div>
  )
}

export default ListUser