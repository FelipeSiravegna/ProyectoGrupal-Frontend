import * as React from 'react';
import './Users.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allUsers, UserPremium } from '../../redux/actions';
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button'
import { useState } from 'react';




export default function Users() {

const dispatch = useDispatch()
const usuarios = useSelector(state => state.users)
const [emailE, setEmailE] = useState('')



useEffect(() => {
    dispatch(allUsers()) 
    }, [])


function uPremium(e) {
  dispatch(UserPremium(e))
}


  return (
    <div className='table'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>ID</th>
          <th>Lists</th>
          <th>SubscribedTo</th>
          <th>Subscribers</th>
          <th>Premium</th>
          <th>Active</th>
          <th>Banned</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
          {usuarios.length !== 0 ? usuarios.map(a => {return(
        <tr key={a.id}>
          <td>{a.username}</td>
          <td value={emailE}>{a.email}</td>
          <td>{a.id}</td>
          <th>{a.playLists !== null ? a.playLists : 0}</th>
          <td>{a.subscribedTo !== null ? a.subscribedTo : 0}</td>
          <td>{a.subscribers !== null ? a.subscribers : 0 }</td>
          <td>{a.premium === false ? "false" : "true"} <Button size='xs' onChange={uPremium(a.email)}>Modify</Button> </td>         
          <td>{a.active === false ? "false" : "true"} <Button size='xs'>Modify</Button> </td> 
          <td>{a.banned === false ? "false" : "true"} <Button size='xs'>Modify</Button> </td> 
          <td>{a.admin === false ? "false" : "true"} <Button color='rojo' size='xs'>Modify</Button> </td> 

        </tr>
)}): null}
      </tbody>
    </Table>
    </div>
  );
}

