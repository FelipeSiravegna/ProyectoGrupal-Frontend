import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import style from './Loginscreen.module.css'
import NavbarP from '../NavbarP/NavbarP'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import GoogleIcon from '@mui/icons-material/Google';
import fondoRegister from '../media/LogoCompleto.png'
import {checkUserInfo,handleLoginExternal} from '../../redux/actions'
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"


export default function Loginscreen(){
    
    const dispatch = useDispatch()
    const navigate = useNavigate();

    //funcion de callback al loguearse
    const handleCallbackResponse = (response)=>{
        let userObject = jwt_decode(response.credential)
        const info = {username:userObject.name.replace(" ","585"),email:userObject.email,password:userObject.sub.slice(0,10)+"TCm!"}
        dispatch(handleLoginExternal(info))
        navigate("/")
    }
    //activacion de script para autenticacion de google
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id:"865394757954-2n35bg590t4opfgu30pf5di2u9i7bu0p.apps.googleusercontent.com",
            callback:handleCallbackResponse
            
        })
        google.accounts.id.renderButton(
            document.getElementById("signWithGoogle"),
            {theme:"outline",size:"large"}
        )
    },[])
    
    const [form, setForm] = useState({
        identificator: '',
        pass: ''
    })

    const [errors, setErrors] = useState({
        identificator: ''
    })
    
    function handleInput(e){
            setForm({
                ...form,
                [e.target.name] : e.target.value
            })
            setErrors(validate({
                ...form,
                [e.target.name] : e.target.value
            }))
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(checkUserInfo(form))
        navigate("/")
    }

    return(
        <div className={style.fondo98}>
            <NavbarP />
        <div className={style.root}>
           <h1 className={style.titulo}>Log in</h1>
                <form onSubmit={handleSubmit}>
                <Form.Group className={style.conteiner} controlId="formBasicEmail">
                <Form.Label>UserName or E-mail</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name='identificator' onChange={e => handleInput(e)}/>
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

            {errors.email && <p className={style.errors}>{errors.email}</p>}

                <Form.Group className={style.conteiner} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='pass' onChange={e => handleInput(e)}/>
                </Form.Group>

            {errors.pass && <p className={style.errors}>{errors.pass}</p>}

            <div className={style.button}>
            <Button variant="primary" type="submit" disabled={Object.entries(errors).length}>Submit</Button>
            </div>

                <div className={style.loginSocial}>
                    <div id="signWithGoogle" ></div>
                    {/* <div><Button variant="primary" type="button"  onClick={()=> loginWithRedirect()}><GoogleIcon/></Button></div> */}
                <div className={style.marginButtons}></div>
                </div>
                </form>
        </div>
           
        <div className={style.logo}><img src={fondoRegister} alt="" height={'250px'} width={'400px'} /></div>
        </div>
    )
}

export function validate(errors){
    let error = {}
    
    if(!errors.pass) error.pass = 'Password is require'
    if(errors.pass.includes(' ')) error.pass = "Password can't contain spaces."
    if(!errors.identificator) error.identificator = 'E-mail is require'


    return error
}