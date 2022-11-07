import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import style from './form.module.css'
import { Link } from 'react-router-dom'
import NavbarP from '../NavbarP/NavbarP'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fondoRegister from '../media/LogoCompleto.png'
import {userCreate} from '../../redux/actions'
import { useAuth0 } from "@auth0/auth0-react";

export default function Register(){

    const dispatch = useDispatch()

    const {loginWithRedirect} = useAuth0()
    
    const [form, setForm] = useState({
        username: '',
        password: '',
        email: ''
    })

    const [errors, setErrors] = useState({
        username: ''
    })

    useEffect(() => {
      
    },[dispatch])
    
    function handleInput(e){
            setForm({
                ...form,
                [e.target.name] : e.target.value
            })
            setErrors(validate({
                ...form,
                [e.target.name] : e.target.value
            }))
            console.log(errors)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(userCreate(form))
        alert('User succesful')
        loginWithRedirect()
    }

    return(
        <div className={style.fondo98}>

            <NavbarP/>
        <div className={style.root}>
           <h1 className={style.titulo}>Create User</h1>
           
           <form onSubmit={handleSubmit}>

            <Form.Group className={style.conteiner} controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" name='username' onChange={e => handleInput(e)}/>
      </Form.Group>

      {errors.username && <p className={style.errors}>{errors.username}</p>}

            <Form.Group className={style.conteiner} controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={e => handleInput(e)}/>
      </Form.Group>

      {errors.password && <p className={style.errors}>{errors.password}</p>}

      <Form.Group className={style.conteiner} controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='confirmpassword' onChange={e => handleInput(e)}/>
      </Form.Group>

      {errors.confirmpassword && <p className={style.errors}>{errors.confirmpassword}</p>}

            <Form.Group className={style.conteiner} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={e => handleInput(e)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {errors.email && <p className={style.errors}>{errors.email}</p>}

            <div className={style.button}>
        <Button variant="primary" type="submit" disabled={Object.entries(errors).length}>
        Submit
      </Button>
            </div>

           </form>
           </div>
           <div className={style.logo}>
            <img src={fondoRegister} alt="" height={'250px'} width={'400px'} />
           </div>
        </div>
    )
}

export function validate(errors){
    let error = {}
    
    if(errors.password !== errors.confirmpassword) error.confirmpassword = 'The password does not match'
    if(!errors.password) error.password = 'Password is require'
    if(errors.password.includes(' ')) error.password = "Password can't contain spaces."
    if(!errors.username) error.name = 'Username is require'
    if(!errors.email) error.email = 'E-mail is require'


    return error
}