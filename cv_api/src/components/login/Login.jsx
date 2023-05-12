import React from 'react'
import profile from "../../assets/usuario.png"
import {Link} from 'react-router-dom'
import {BiUser} from 'react-icons/bi'
import './login.css'

const Login = () => {
    var usr = "admin";
    var pw = "admin";

    return (
        
        <div className='login'>
            <Link to="/">
                <button className='btn-secondary'>Volver</button>
            </Link>
            <div className='sub-login'>
                <div>
                    <div className='imgs'>
                        <div className='container-image'>
                            <img src={profile} alt="profile" className='profile' />
                        </div>
                    </div>
                    <div>
                        <h1 className="titulo-login">Login</h1>
                        <div>
                            <input type="text" placeholder='user name' className='name'></input>
                        </div>
                        <div className='second-input'>
                            <input  type="password" placeholder='password' className='name' />
                        </div>
                        <div className='login-button'>
                            <Link to="/solicitudes">
                                <button className='btn-primary'>Login</button>
                            </Link>
                        </div>
                        <p className='link'>
                            <a href="#">Forgot password?</a> Or <a href="#">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login