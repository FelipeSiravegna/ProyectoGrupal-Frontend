import React from 'react'
import './ListUser.css'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createList, getList, getListsByUser } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const CreateList = () => {
  const dbUser = useSelector(state => state.user)

  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getList())
    dispatch(getListsByUser(localStorage.id))
  }, [show, name, description])


function creacion (e){
e.preventDefault()
if(name.length > 30) return document.getElementById('errores').innerHTML=`the maximum number of characters allowed is 30`
dispatch(createList(localStorage.id,{
    name: name,
    description: description,
    ownerUserId:localStorage.id
}))
setShow(false)
}

  const userLists = useSelector(state => state.userLists);


  function creacion(e) {
    if (name.length > 30) return document.getElementById('errores').innerHTML = `the maximum number of characters allowed is 30`
    dispatch(createList(localStorage.id, {
      name: name,
      description: description
    }))
    setShow(false)
  }

  const getPremiumAlert = () => {
    alert('Become a premium user to create more lists!');
  }
  if (dbUser !== null) {
    return (
      <>
     {
          userLists.length < 3  || dbUser.premium === true || userLists.length === 0
            ?
            <Button variant="contained" color='rojo' onClick={handleShow}>
              Create List
            </Button>
            :
            null
        }

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>List name</Form.Label>
                <Form.Control
                  placeholder="example: 1980 war movies"
                  autoFocus
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <p id='errores'></p>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button color='rojo' variant='outlined' onClick={handleClose}>
              Close
            </Button>
            <Button color="rojo" variant='contained' onClick={creacion}>
              Create list
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}



export default CreateList