import React from 'react'
import profile from "../../assets/usuario.png"
import users from "../../assets/favicon.png"
import pass from "../../assets/favicon.png"
import {Link} from 'react-router-dom'
import './login.css'

const Login = () => {
    var usr = "admin";
    var pw = "admin";

    return (
        
        <div className='login'>
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
                            <img src={users} alt="users" className='users' />
                            <input value={usr} type="text" placeholder='user name' className='name' />
                        </div>
                        <div className='second-input'>
                            <img src={pass} alt="pass" className='users' />
                            <input value={pw} type="password" placeholder='password' className='name' />
                        </div>
                        <div className='login-button'>
                            <Link to="/solicitudes">
                                <button>Login</button>
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