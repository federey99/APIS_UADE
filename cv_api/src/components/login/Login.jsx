import React from 'react'
import profile from "../../assets/favicon.png"
import users from "../../assets/favicon.png"
import pass from "../../assets/favicon.png"
import './login.css'

const Login = () => {
    /*const email = "ignaciop_99@gmail.com";
    const password = "123456";*/

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
                        <h1>Login</h1>
                        <div>
                            <img src={users} alt="users" className='users' />
                            <input type="text" placeholder='user name' className='name' />
                        </div>
                        <div className='second-input'>
                            <img src={pass} alt="pass" className='users' />
                            <input type="password" placeholder='password' className='name' />
                        </div>
                        <div className='login-button'>
                            <button>Login</button>
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

/*<form>
                    <label for="email">Email</label>
                    <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                    <label for="password">Password</label>
                    <input value={password} type="password" placeholder="********" id="password" name="password"></input>
                    <button>Log In</button>
                </form>*/