import { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import style from './form.module.css'
import NavbarP from '../NavbarP/NavbarP'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fondoRegister from '../media/LogoCompleto.png'
import {userCreate,checkUserInfo,allUsers} from '../../redux/actions'
import { useNavigate } from "react-router-dom";

export default function Register(){

    const dispatch = useDispatch()

    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        username: '',
        password: '',
        email: ''
    })

    const [errors, setErrors] = useState({
        username: ''
    })

    useEffect(() => {
        dispatch(allUsers())
    },[dispatch])

    const users = useSelector((state)=>state.users)
    
    function handleInput(e){
            setForm({
                ...form,
                [e.target.name] : e.target.value
            })
            setErrors(validate({
                ...form,
                [e.target.name] : e.target.value
            },users))
            console.log(errors)
            console.log(form)

    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(userCreate(form))
        alert('User succesful')
        navigate("/")
        
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
        <Form.Control type="password" placeholder="confirmpassword" name='confirmpassword' onChange={e => handleInput(e)}/>
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

export function validate(errors,users){
    let error = {}

    const usuarios = users.map(e => e.username)
    const emails = users.map(e => e.email)

    const passwordv = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    const emailv = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const usernamev = /^([a-zA-Z0-9_-]){3,20}$/
    
    if(!errors.password) error.password = 'Password is require'
    if(errors.password !== errors.confirmpassword) error.confirmpassword = 'The password does not match'
    if(!passwordv.test(errors.password)) error.password = "The password must contain between 8 and 15 characters, numbers and special characters"
    
    if(!errors.username.length) error.username = 'Username is require'
    if(usuarios.includes(errors.username)) error.username = 'Username already exists'
    if(!usernamev.test(errors.username)) error.username = 'Username between 3 and 20 alphanumeric characters'
    if(errors.username.includes('-') || errors.username.includes('_')) error.username = 'Username between 3 and 20 alphanumeric characters'
    
    if(!errors.email.length) error.email = 'E-mail is require'
    if(!emailv.test(errors.email)) error.email = 'E-mail is invalid'
    if(emails.includes(errors.email)) error.email = 'Email already exists'


    return error
}