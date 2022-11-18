import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './accounts.module.css'
import NavbarP from '../NavbarP/NavbarP'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fondoRegister from '../media/LogoCompleto.png'
import { allUsers, putUser } from '../../redux/actions'
import { useNavigate } from "react-router-dom";

export default function AccountsEdit() {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    let dbUser = useSelector(state => state.user)

    const [username, setUsername] = useState(true)
    const [password, setPassword] = useState(true)
    const [email, setEmail] = useState(true)

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
    }, [dispatch])

    const users = useSelector((state) => state.users)

    function handleInput(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }, users, username, password, email))
    }

    function handleClick(e) {
        if (e.target.name === 'username') {

            if (username) {
                setUsername(false)
            }
            else {
                setUsername(true)
                setForm({
                    ...form,
                    [e.target.name]: ''
                })
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                })
            }
        }

        if (e.target.name === 'password') {
            if (password) {
                setPassword(false)
            }
            else {
                setPassword(true)
                setForm({
                    ...form,
                    [e.target.name]: ''
                })
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                })
            }
        }
        if (e.target.name === 'email') {
            if (email) {
                setEmail(false)
            }
            else {
                setEmail(true)
                setForm({
                    ...form,
                    [e.target.name]: ''
                })
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                })
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (form.confirmpassword) delete form.confirmpassword
        if (!form.username.length) delete form.username
        if (!form.password) delete form.password
        if (!form.email) delete form.email
        const { id } = dbUser
        dispatch(putUser(id, form))
        alert('User succesful')
        navigate("/")
    }

    return (
        <div className={style.fondo98}>
            <NavbarP />
            {
                dbUser.active &&
                <>
                    <div className={style.root}>
                        <h1 className={style.titulo}>EDIT ACCOUNT</h1>
                        <form onSubmit={handleSubmit}>
                            <Form.Group className={style.conteiner} controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" name='username' value={form.username} disabled={username} onChange={e => handleInput(e)} />
                            </Form.Group>
                            <div className={style.buttonChange}>
                                <Button variant="primary" name='username' onClick={(e) => handleClick(e)} >{username ? 'Change' : 'Cancel'}</Button>
                            </div>
                            {errors.username && <p className={style.errors}>{errors.username}</p>}
                            <Form.Group className={style.conteiner} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={form.password} disabled={password} onChange={e => handleInput(e)} />
                            </Form.Group>
                            <div className={style.buttonChange}>
                                <Button variant="primary" name='password' onClick={(e) => handleClick(e)} >{password ? 'Change' : 'Cancel'}</Button>
                            </div>
                            {errors.password && <p className={style.errors}>{errors.password}</p>}
                            {
                                !password &&
                                <Form.Group className={style.conteiner} controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="confirm password" name='confirmpassword' disabled={password} onChange={e => handleInput(e)} />
                                </Form.Group>
                            }
                            {errors.confirmpassword && <p className={style.errors}>{errors.confirmpassword}</p>}
                            <Form.Group className={style.conteiner} controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={form.email} disabled={email} onChange={e => handleInput(e)} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <div className={style.buttonChange}>
                                <Button variant="primary" name='email' onClick={(e) => handleClick(e)} >{email ? 'Change' : 'Cancel'}</Button>
                            </div>
                            {errors.email && <p className={style.errors}>{errors.email}</p>}
                            <div className={style.button}>
                                <Button variant="primary" type="submit" disabled={Object.entries(errors).length}>
                                    SUBMIT
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className={style.logo}>
                        <img src={fondoRegister} alt="" height={'250px'} width={'400px'} />
                    </div>
                </>
            }
        </div>
    )
}

export function validate(errors, users, username, password, email) {
    let error = {}

    const usuarios = users.map(e => e.username)
    const emails = users.map(e => e.email)

    const passwordv = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    const emailv = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const usernamev = /^([a-zA-Z0-9_-]){3,20}$/

    if (!errors.password && !password) error.password = 'Password is require'
    if (errors.password !== errors.confirmpassword && !password) error.confirmpassword = 'The password does not match'
    if (!passwordv.test(errors.password) && !password) error.password = "The password must contain between 8 and 15 characters, numbers and special characters"

    if (!errors.username.length && !username) error.username = 'Username is require'
    if (usuarios.includes(errors.username) && !username) error.username = 'Username already exists'
    if (!usernamev.test(errors.username) && !username) error.username = 'Username between 3 and 20 alphanumeric characters'
    if (errors.username.includes('-') || errors.username.includes('_') && !username) error.username = 'Username between 3 and 20 alphanumeric characters'

    if (!errors.email.length && !email) error.email = 'E-mail is require'
    if (!emailv.test(errors.email) && !email) error.email = 'E-mail is invalid'
    if (emails.includes(errors.email) && !email) error.email = 'Email already exists'

    return error
}