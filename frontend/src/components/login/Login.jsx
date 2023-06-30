import React, {useState, useEffect} from 'react'
import profile from "../../assets/usuario.png"
import {Link, useNavigate} from 'react-router-dom'
//import {BiUser} from 'react-icons/bi'
import './login.css'
import login from '../../api/login.api';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [logueado, setLogueo] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      let response = await login(email, password);
      console.log(response);
      sessionStorage.setItem("access-token", response.token);
      console.log('Email:', email);
      console.log('Password:', password);
  
      if (response.status === 200) {
        setLogueo(true);
        navigate("/solicitudes");
      } else {
        setErrorMessage(response.message);
      }
    };
  
    useEffect(() => {
      if (logueado) {
        navigate("/solicitudes");
      }
    }, [logueado, navigate]);
  
    return (
      <div className='login'>
        <Link to="/">
          <button className='btn-secondary'>Volver</button>
        </Link>
        <div className='sub-login'>
          <div className='imgs'>
            <div className='container-image'>
              <img src={profile} alt="profile" className='profile' />
            </div>
          </div>
          <div>
            <h1 className="titulo-login">Login</h1>
            <div>
              <input
                type="email"
                placeholder='Email'
                className='name'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className='second-input'>
              <input
                type="password"
                placeholder='Password'
                className='name'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className='login-button'>
              <button type="submit" className='btn-primary' onClick={handleLogin}>Login</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className='link'>
              <a href="#">Forgot password?</a> Or <Link to="/registro"><a href="#">Sign Up</a></Link>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;